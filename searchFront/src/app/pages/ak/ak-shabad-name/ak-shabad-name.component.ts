import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ak-shabad-name',
  templateUrl: './ak-shabad-name.component.html',
  styleUrls: ['./ak-shabad-name.component.scss']
})
export class AkShabadNameComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public page_info: any;
  public shabad_id: any;
  public line_no: any;
  public shabad_name: string;
  public highlight_punjabi: string;
  public subtitle: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.highlight_punjabi = '';
    this.route.params.subscribe(p=>{
      if(!p) return;
      this.shabad_id = p.shabad_id;
      this.shabad_name = p.shabad_name;
      this.line_no = p.line_no;
      this.gotoPage();
    })
  }

  getHighlight_punjabi() {
    let lines = this.page_info.lines;
    this.highlight_punjabi = this.page_info.shabad_info.shabad_name + '<br />' +
    this.page_info.shabad_info.shabad_punjabi;
    this.subtitle = "This shabad is by " + this.page_info.shabad_info.author + " in " + this.page_info.shabad_info.raag
    + " on Page " + this.page_info.shabad_info.pageno + "<br />" +
    "in Section '" + this.page_info.shabad_info.section_name + "' of Amrit Keertan Gutka.";
  }

  gotoPage(){
      this.searchService.ak_shabad_line(this.shabad_id, this.line_no).subscribe(res=>{
        this.page_info = res;
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
        this.titleService.setTitle(res.meta_title);
        this.getHighlight_punjabi();
      })
  }
}
