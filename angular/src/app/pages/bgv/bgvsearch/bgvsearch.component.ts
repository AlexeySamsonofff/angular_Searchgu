import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bgvsearch',
  templateUrl: './bgvsearch.component.html',
  styleUrls: ['./bgvsearch.component.scss']
})
export class BGVsearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  additional_flag: boolean;
  constructor(private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.additional_flag = true;
    this.ts.setTitle('Advance Search Amrit Keertan Gutka  :- SearchGurbani.com');
    this.meta.updateTag({name: 'Description', content: 'dvance Search Bhai Gurdas Vaaran  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content:'dvance Search Bhai Gurdas Vaaran  :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Advance Search Amrit Keertan Gutka  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
  }

}
