import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  additional_flag: boolean;
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Advance Search Amrit Keertan Gutka  :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Advance Search Amrit Keertan Gutka  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Advance Search Amrit Keertan Gutka  :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Advance Search Amrit Keertan Gutka  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
    this.additional_flag = true;
  }

}
