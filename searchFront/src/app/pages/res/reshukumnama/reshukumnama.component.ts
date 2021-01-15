import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reshukumnama',
  templateUrl: './reshukumnama.component.html',
  styleUrls: ['./reshukumnama.component.scss']
})
export class ReshukumnamaComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  public chapters: any[];
  public selected_chapter: any;
  public subChapters: any[];
  public parentChapters: any[];
  constructor(private searchService: SearchService, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.selected_chapter = {};
    this.chapters = [];
    this.subChapters = [];
    this.parentChapters = [];
    this.searchService.hukumnama().subscribe(res=>{
      if(res){
        this.ts.setTitle(res.meta_title);
        this.meta.addTags([
          {name: 'Description', content: res.meta_description},
          {name: 'og:description', content: res.meta_description},
          {name: 'Keywords', content: res.meta_keywords},
          {name: 'og:title', content: res.meta_title}
        ]);
        this.chapters = res.hukumnama_titles;
        // this.makeFirstChapters();
        this.parentChapters = this.makeParents();
        this.makeSubChapters();
      }
    });

  }

  makeParents(){
    let parents = [];
    this.chapters.forEach(c=>{
      let sub = parents.filter(p=>{
        return p.raag === c.raag
      });
      if(sub.length === 0){
        parents.push(c);
      }
    });
    return parents;
  }

  makeSubChapters(){
    let parents = [];
    this.parentChapters.forEach(p=>{
      let childs = this.chapters.filter(c=>{
        return c.raag === p.raag;
      });
      parents.push({...p, childs: childs});
    });
    this.parentChapters = parents;
  }

}
