import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-res-sri-nanak-prakash-chapters',
  templateUrl: './res-sri-nanak-prakash-chapters.component.html',
  styleUrls: ['./res-sri-nanak-prakash-chapters.component.scss']
})
export class ResSriNanakPrakashChaptersComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";

  chapterId: number;
  page_info: any;
  constructor(private route: ActivatedRoute, private searchService: SearchService, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {chapters: []};
    this.route.params.subscribe((p)=>{
      this.chapterId = p.chapterId;
      this.getPageInfo();
    })
  }

  getPageInfo() {
    this.searchService.sri_nanak_prakash_chapters(this.chapterId).subscribe(res=>{
      this.page_info = res;
      this.ts.setTitle(res.meta_title);
      this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
    })
  }

}
