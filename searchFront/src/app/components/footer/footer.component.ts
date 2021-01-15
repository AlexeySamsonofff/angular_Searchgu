import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() backColor:string;
  constructor(private meta: Meta) { }

  ngOnInit() {
    let titleTag : HTMLMetaElement = this.meta.getTag('property = "og:title"');
    let desTag: HTMLMetaElement = this.meta.getTag('property = "og:description"');
    if(titleTag) {
      this.meta.updateTag({ property: 'twitter:title', content: titleTag.content });
    }
    if(desTag) {
      this.meta.updateTag({property: 'twitter:description', content: desTag.content});
    }

  }

  topPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
