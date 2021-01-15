import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ks-kabit-line',
  templateUrl: './ks-kabit-line.component.html',
  styleUrls: ['./ks-kabit-line.component.scss']
})
export class KsKabitLineComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile17.jpg)";
  param:Array<string> = ['ks'];
  footerColor = "#090241";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";

  public cur_page: number;
  public lineno: number;
  public page_info: any;
  public max_page: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.max_page = 675
    this.cur_page = 1;
    this.route.params.subscribe(p=>{
      this.cur_page = p.shabad_id;
      this.lineno = p.lineno;
      this.gotoPage(this.cur_page);
    })
  }

  gotoPage(page){
      this.searchService.ks_kabit_line(page, this.lineno).subscribe(res=>{
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
