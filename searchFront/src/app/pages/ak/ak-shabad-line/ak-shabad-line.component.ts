import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ak-shabad-line',
  templateUrl: './ak-shabad-line.component.html',
  styleUrls: ['./ak-shabad-line.component.scss']
})
export class AkShabadLineComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public page_info: any;
  public shabad_id: any;
  public lineno: any;
  public highlight_punjabi: string;
  public subtitle: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private meta: Meta, private ts: Title) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.highlight_punjabi = '';
    this.route.params.subscribe(p=>{
      if(!p) return;
      this.shabad_id = p.shabad_id;
      this.lineno = p.lineno;
      this.gotoPage();
    })
  }

  getHighlight_punjabi() {
    let lines = this.page_info.lines;
    for(let i = 0; i<lines.length; i++) {
      if(this.page_info.highlight_line == lines[i].shabadlineno) {
        this.highlight_punjabi = this.page_info.shabad_info.shabad_name + "<br />" + this.page_info.shabad_info.shabad_punjabi;
        this.subtitle = "This shabad is by " + this.page_info.shabad_info.author + " in " + this.page_info.shabad_info.raag +
        " on Page " + this.page_info.shabad_info.pageno + "<br />" + "in Section " + this.page_info.shabad_info.section_name + "' of Amrit Keertan Gutka.";
        break;
      }
    }
  }

  gotoPage(){
      this.searchService.ak_shabad_line(this.shabad_id, this.lineno).subscribe(res=>{
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
