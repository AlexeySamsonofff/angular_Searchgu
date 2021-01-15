import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-res-sggsg-search-preview',
  templateUrl: './res-sggsg-search-preview.component.html',
  styleUrls: ['./res-sggsg-search-preview.component.scss']
})
export class ResSggsgSearchPreviewComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";

  page: number;
  keyword: string;
  page_info: any;

  constructor(private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.page = 1;
    this.page_info = {occurrences: []};
    this.keyword = localStorage.getItem('book_2_keyword');
    this.getPage();
  }

  getPage() {
    this.searchService.sgpsg_search_preview(this.page-1, this.keyword).subscribe(res=>{

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
