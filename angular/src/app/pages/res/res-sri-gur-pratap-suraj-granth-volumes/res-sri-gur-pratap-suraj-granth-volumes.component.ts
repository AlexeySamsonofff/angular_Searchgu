import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-res-sri-gur-pratap-suraj-granth-volumes',
  templateUrl: './res-sri-gur-pratap-suraj-granth-volumes.component.html',
  styleUrls: ['./res-sri-gur-pratap-suraj-granth-volumes.component.scss']
})
export class ResSriGurPratapSurajGranthVolumesComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  public page_info: any;
  public volumeInfo: any;

  constructor(private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.volumeInfo = { volumes: []};
    this.ts.setTitle('Sri Gur Pratap Suraj Granth Volume Index-:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com');
    this.getPageInfo();
  }

  getPageInfo() {
    this.searchService.sgpsg_volumes().subscribe(res=>{
      this.volumeInfo = res;
      this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
    });
  }
}
