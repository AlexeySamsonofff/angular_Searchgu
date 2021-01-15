import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";

  constructor(private titleService: Title, private meta: Meta){}

  ngOnInit() {
    this.meta.updateTag({name: 'Description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar'});
    this.meta.updateTag({property: 'og:description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas Vaaran, Kabit Bhai Gurdaas ,Sri Dasam Granth Sahib, exegesis , Gurbani, Gurbanee vichaar'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbaanee Keertan,Gurmat Sangeet, Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, jaap, Sukhmani, Ardaas'});
    this.meta.updateTag({property: 'og:title', content: 'Search Gurbani : Gurbani Research Website'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.titleService.setTitle("Search Gurbani : Gurbani Research Website");
  }

}
