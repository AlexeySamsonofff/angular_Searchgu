import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reshukumnamacyber',
  templateUrl: './reshukumnamacyber.component.html',
  styleUrls: ['./reshukumnamacyber.component.scss']
})
export class ReshukumnamacyberComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  public page_info: any;
  public ang_no: string;
  public data: any;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private ts: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.page_info = {lines: []};
    this.data = {
      "punjabi": "",
      "translit": "",
      "english": "",
      "ss_para": "",
    }
    this.ang_no = Math.floor(Math.random() * 467 + 1).toString();
    this.get_pageinfo();
  }

  get_pageinfo(){
    this.searchService.hukumnama_ang(this.ang_no, 'id').subscribe(res=>{
      if(res){
        this.ts.setTitle(res.meta_title);
        this.meta.addTags([
          {name: 'Description', content: res.meta_description},
          {name: 'og:description', content: res.meta_description},
          {name: 'Keywords', content: res.meta_keywords},
          {name: 'og:title', content: res.og_title}
        ]);
        this.page_info = res;
        this.page_info.lines.forEach(element => {
          this.data['punjabi'] += (element.punjabi != "" ? element.punjabi + "<br />" : "");
          this.data['translit'] += (element.translit != "" ? element.translit + "<br />" : "");
          this.data['english'] += (element.english != "" ? element.english + "<br />" : "");
          this.data['ss_para'] += element.ss_para;
        });
      }
    });
  }
}
