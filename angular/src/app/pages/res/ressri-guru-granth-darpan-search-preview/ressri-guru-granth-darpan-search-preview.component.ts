import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-ressri-guru-granth-darpan-search-preview',
  templateUrl: './ressri-guru-granth-darpan-search-preview.component.html',
  styleUrls: ['./ressri-guru-granth-darpan-search-preview.component.scss']
})
export class RessriGuruGranthDarpanSearchPreviewComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";

  page: number;
  keyword: string;
  page_info: any;

  constructor(private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.page = 1;
    this.page_info = {occurrences: []};
    this.keyword = localStorage.getItem('book_4_keyword');
    this.getPage();
  }

  getPage() {
    this.searchService.sggd_search_preview(this.page-1, this.keyword).subscribe(res=>{

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
