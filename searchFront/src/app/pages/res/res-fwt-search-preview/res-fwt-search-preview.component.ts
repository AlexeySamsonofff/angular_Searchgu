import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-res-fwt-search-preview',
  templateUrl: './res-fwt-search-preview.component.html',
  styleUrls: ['./res-fwt-search-preview.component.scss']
})
export class ResFwtSearchPreviewComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359";

  page: number;
  keyword: string;
  page_info: any;

  constructor(private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.page = 1;
    this.page_info = {occurrences: []};
    this.keyword = localStorage.getItem('book_3_keyword');
    this.getPage();
  }

  getPage() {
    this.searchService.fwt_search_preview(this.page-1, this.keyword).subscribe(res=>{

      this.ts.setTitle(res.meta_title);
      this.meta.updateTag({name: 'Description', content: res.meta_description});
      this.meta.updateTag({property: 'og:description', content: res.meta_description});
      this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
      this.meta.updateTag({property: 'og:title', content: res.meta_title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

      this.page_info = res;
    })
  }

  pageChanged(event: any) {
    this.getPage();
  }
}
