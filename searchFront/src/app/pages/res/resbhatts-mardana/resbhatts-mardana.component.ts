import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-resbhatts-mardana',
  templateUrl: './resbhatts-mardana.component.html',
  styleUrls: ['./resbhatts-mardana.component.scss']
})
export class ResbhattsMardanaComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile19.jpg)";
  param:Array<string> = ['gurus'];
  footerColor = "#916406"
  html: string = "";
  constructor(private titleService: Title, private meta: Meta, private searchService: SearchService) { }

  ngOnInit() {
    let path = window.location.pathname.replace('/', '');
    this.searchService.getMeta(path).subscribe(ret=>{
      let metaInfo = ret.data;
      this.titleService.setTitle(metaInfo.title);
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
