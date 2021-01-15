import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dgs-shabad-line',
  templateUrl: './dgs-shabad-line.component.html',
  styleUrls: ['./dgs-shabad-line.component.scss']
})
export class DgsShabadLineComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile13.jpg)";
  param:Array<string> = ['dgs'];
  footerColor = "#464102"
  public page_info: any;
  public shabad_id: any;
  public lineno: any;
  public highlight_punjabi: string;
  public subtitle: string;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private ts: Title, private meta: Meta) { }

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
        this.highlight_punjabi = lines[i].punjabi;
        this.subtitle = "This shabad is on page " + this.page_info.shabad_info[0].pageno + "   of Sri Dasam Granth Sahib.";
        break;
      }
    }
  }

  gotoPage(){
      this.searchService.dgs_shabad_line(this.shabad_id, this.lineno).subscribe(res=>{
        this.page_info = res;
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
        this.ts.setTitle(res.meta_title);
        this.getHighlight_punjabi();
      })
  }

}
