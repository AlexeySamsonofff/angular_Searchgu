import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer} from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-resgurus-guruteghbhadur1',
  templateUrl: './resgurus-guruteghbhadur1.component.html',
  styleUrls: ['./resgurus-guruteghbhadur1.component.scss']
})
export class ResgurusGuruteghbhadur1Component implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
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
