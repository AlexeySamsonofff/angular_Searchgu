import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kskbk',
  templateUrl: './kskbk.component.html',
  styleUrls: ['./kskbk.component.scss']
})
export class KskbkComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile17.jpg)";
  param:Array<string> = ['ks'];
  footerColor = "#090241";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";

  public cur_page: number;
  public line_no: number;
  public max_page: number;
  public page_info: any;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.cur_page = 1;
    this.max_page = 675;
    this.route.params.subscribe(p=>{
      this.cur_page = p.page_no;
      this.line_no = p.line_no;
    });
    this.gotoPage(this.cur_page);
  }

  gotoPage(page){

      this.searchService.ks_kabit_by_kabit(page, this.line_no).subscribe(res=>{
        this.page_info = res;
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      })
  }
}
