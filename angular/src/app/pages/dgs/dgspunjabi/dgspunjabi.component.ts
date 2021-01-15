import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dgspunjabi',
  templateUrl: './dgspunjabi.component.html',
  styleUrls: ['./dgspunjabi.component.scss']
})
export class DGSpunjabiComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile13.jpg)";
  param:Array<string> = ['dgs'];
  footerColor = "#464102"
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
    this.ts.setTitle("Sri Dasam Granth Sahib Chapter Index : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Explore Sri Dasam Granth Sahib Chapter Index : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Explore Sri Dasam Granth Sahib Chapter Index : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Sri Dasam Granth Sahib Chapter Index : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
    this.searchService.dgs_chapter_index('pb').subscribe(res=>{
      if(res){
        this.chapters = res.chapters;
        // this.makeFirstChapters();
        this.parentChapters = this.makeParents();
        this.makeSubChapters();
      }
    });

  }

  makeParents(){
    let parents = [];
    this.chapters.forEach(c=>{
      if(c.parentID == 1369){
        parents.push(c);
      }
    });
    return parents;
  }

  makeSubChapters(){
    let parents = [];
    this.parentChapters.forEach(p=>{
      let childs = this.chapters.filter(c=>{
        return c.parentID === p.chapter_id;
      });
      parents.push({...p, childs: childs});
    });
    this.parentChapters = parents;
  }
}
