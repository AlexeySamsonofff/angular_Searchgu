import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bgvpbp',
  templateUrl: './bgvpbp.component.html',
  styleUrls: ['./bgvpbp.component.scss']
})
export class BGVpbpComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public cur_page: number;
  public max_page: number;
  public page_info: any;
  public vaar_no: number;

  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: [], pauri_info: []};
    this.cur_page = 1;
    this.max_page = 49;
    this.vaar_no = 1;

    this.gotoPage(this.cur_page);
  }

  gotoPage(page){
      this.searchService.vaar(1, page).subscribe(res=>{
        this.page_info = res;
        this.titleService.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      })
  }
}
