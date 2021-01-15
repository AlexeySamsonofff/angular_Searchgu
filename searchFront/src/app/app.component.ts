import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'searchFront';

  constructor(private meta: Meta) {   }

  ngOnInit() {
    this.meta.updateTag({ property: 'og:author', content: 'Gateway to Sikhism Foundation' });
    this.meta.updateTag({ property: 'fb:app_id', content:'127235423987422' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({property: 'twitter:image:src', content: "/assets/img/share_scripture.png"})
  }

}
