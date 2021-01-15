import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-resraag-siri',
  templateUrl: './resraag-siri.component.html',
  styleUrls: ['./resraag-siri.component.scss']
})
export class ResraagSiriComponent implements OnInit {
  @ViewChild('audio', {static: false}) audio: ElementRef<HTMLAudioElement>;

  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile17.jpg)";
  param:Array<string> = ['ks'];
  footerColor = "#090241"
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
    this.downloadAudio();
  }


  downloadAudio() {
    let path = "raags/" + "raag_siri";
    this.searchService.downloadAudio(path).subscribe(res=>{
      if(res.status && this.audio) {
        this.audio.nativeElement.src = "data:audio/mpeg;base64," + res.data;
      }
    })
  }

}
