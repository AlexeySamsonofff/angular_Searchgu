import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-gurugranthsahibintroduction',
  templateUrl: './gurugranthsahibintroduction.component.html',
  styleUrls: ['./gurugranthsahibintroduction.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class GurugranthsahibintroductionComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  param:Array<string> = ['ggs'];
  footerColor = "#2f4203"
  html: string = "";
  constructor(private ts: Title, private meta: Meta, private searchService: SearchService, private santizer: DomSanitizer) { }

  ngOnInit() {
    this.html = "";
    let path = window.location.pathname.replace('/', '');
    this.searchService.getMeta(path).subscribe(ret=>{
      let metaInfo = ret.data;
      this.ts.setTitle(metaInfo.title);
      this.meta.updateTag({name: 'Description', content: metaInfo.description});
      this.meta.updateTag({property: 'og:description', content: metaInfo.description});
      this.meta.updateTag({name: 'Keywords', content: metaInfo.keywords});
      this.meta.updateTag({property: 'og:title', content: metaInfo.title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
      // this.html = this.getHtml(metaInfo.html);
      this.html = metaInfo.html;
    })
  }
}
