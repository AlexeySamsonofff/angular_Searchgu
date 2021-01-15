import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ThrowStmt } from '@angular/compiler';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gurugranthsahibindexchapter',
  templateUrl: './gurugranthsahibindexchapter.component.html',
  styleUrls: ['./gurugranthsahibindexchapter.component.scss']
})
export class GurugranthsahibindexchapterComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  param:Array<string> = ['ggs'];
  footerColor = "#2f4203";

  public chapters: any[];
  public first_chapters: any[];
  public selected_chapter: any;
  public subChapters: any[];
  public parentChapters: any[];
  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.selected_chapter = {};
    this.chapters = [];
    this.subChapters = [];
    this.first_chapters = [];
    this.parentChapters = [];
    this.searchService.get_chapters().subscribe(res=>{
      if(res){
        this.chapters = res;
        this.titleService.setTitle("Sri Guru Granth Sahib Ji - Gurbani Index :- SearchGurbani.com");
        this.makeFirstChapters();
        this.parentChapters = this.makeParents();
        this.makeSubChapters();
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
      }
    });

  }

  makeParents(){
    let parents = [];
    this.chapters.forEach(c=>{
      if(c.page_id == 0){
        parents.push(c);
      }
    });
    return parents;
  }

  makeSubChapters(){
    let parents = [];
    this.parentChapters.forEach(p=>{
      let childs = this.chapters.filter(c=>{
        return c.parentID === p.chapter_id && c.page_id !== 0;
      });
      parents.push({...p, childs: childs});
    });
    this.parentChapters = parents;
  }

  makeFirstChapters() {
    for(let i = 0; i<this.chapters.length; i++) {
      if(this.chapters[i].page_id == 0){
        break;
      }
      this.first_chapters.push(this.chapters[i]);
    }
  }
}
