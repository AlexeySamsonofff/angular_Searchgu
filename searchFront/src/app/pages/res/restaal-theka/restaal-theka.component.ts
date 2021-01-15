import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-restaal-theka',
  templateUrl: './restaal-theka.component.html',
  styleUrls: ['./restaal-theka.component.scss']
})
export class RestaalThekaComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile17.jpg)";
  param:Array<string> = ['ks'];
  footerColor = "#090241"
  html: string = "";
  constructor(private ts: Title, private meta: Meta, private searchService: SearchService) { }

  ngOnInit() {
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
      this.html = metaInfo.html;
    })
  }
}
