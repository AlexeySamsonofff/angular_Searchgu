import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bgv-share-page',
  templateUrl: './bgv-share-page.component.html',
  styleUrls: ['./bgv-share-page.component.scss']
})
export class BgvSharePageComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c"
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public page_info: any;
  public vaar_no: any;
  public line_no: any;
  public pauri_no: any;
  public highlight_punjabi: string;
  public max_page: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.max_page = 49;
    this.page_info = {lines: [], pauri_info: []};
    this.highlight_punjabi = '';
    this.route.params.subscribe(p=>{
      if(!p) return;
      this.vaar_no = p.vaar_no;
      this.pauri_no = p.pauri_no;
      this.line_no = p.line_no;
      this.gotoPage();
    })
  }

  gotoPage(){
      this.searchService.get_shared_bgv(this.vaar_no, this.pauri_no, this.line_no).subscribe(res=>{
        this.page_info = res;
        this.max_page = res.pauri_count;
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
