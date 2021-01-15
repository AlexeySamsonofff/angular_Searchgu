import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bnl-shabad-line',
  templateUrl: './bnl-shabad-line.component.html',
  styleUrls: ['./bnl-shabad-line.component.scss']
})
export class BnlShabadLineComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b";
  public page_info: any;
  public shabad_id: any;
  public lineno: any;
  public highlight_punjabi: string;
  public subtitle: string;
  public type: string;
  public offset: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.highlight_punjabi = '';
    this.route.params.subscribe(p=>{
      if(!p) return;
      this.shabad_id = p.shabad_id;
      this.lineno = p.lineno;
      this.type = p.type;
      this.init();
      this.gotoPage();

    })
  }

  getHighlight_punjabi() {
    let lines = this.page_info.lines;
    for(let i = 0; i<lines.length; i++) {
      if(this.page_info.highlight_line == lines[i].shabadlineno) {
        this.highlight_punjabi = lines[i].punjabi;

        break;
      }
    }
    this.subtitle = "This shabad is on page " + this.page_info.shabad_info[0].pageID + "   of Bhai Nand Lal.";
  }

  init() {
    let ret = "";
    this.offset = 0;
    switch (this.type) {
      case "ghazal":
      {
        break;
      }
      case "quatrains":
      {
        break;
      }
      case "zindginama": {
        break;
      }
      case "ganjnama": {
        break;
      }
      case "jot-bikas": {
        break;
      }
      case "jot-bikas-persian": {
        break;
      }
      case "rahitnama": {
        this.offset = 162;
        break;
      }
      case "tankahnama": {
        this.offset = 166;
        break;
      }
      default: {
        break;
      }
    }
  }

  gotoPage(){
      this.searchService.bnl_shabad_line(this.shabad_id, this.lineno, this.type).subscribe(res=>{
        this.page_info = res;
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
        this.getHighlight_punjabi();
      })
  }

}
