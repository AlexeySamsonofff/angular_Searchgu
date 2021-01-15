import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-ressri-nanak-prakash-search-preview',
  templateUrl: './ressri-nanak-prakash-search-preview.component.html',
  styleUrls: ['./ressri-nanak-prakash-search-preview.component.scss']
})
export class RessriNanakPrakashSearchPreviewComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";

  page: number;
  keyword: string;
  page_info: any;
  constructor(private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.page = 1;
    this.page_info = {occurrences: []};
    this.keyword = localStorage.getItem('book_1_keyword');
    this.getPage();
  }

  getPage() {
    this.searchService.sri_nanak_prakash_search_preview(this.page-1, this.keyword).subscribe(res=>{

      this.ts.setTitle(res.meta_title);
      this.meta.addTags([
        {name: 'Description', content: res.meta_description},
        {name: 'og:description', content: res.meta_description},
        {name: 'Keywords', content: res.meta_keywords},
        {name: 'og:title', content: res.meta_title}
      ]);
      this.page_info = res;
    })
  }

  pageChanged(event: any) {
    this.getPage();
  }
}
