import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gurugranthsahibsearch',
  templateUrl: './gurugranthsahibsearch.component.html',
  styleUrls: ['./gurugranthsahibsearch.component.scss']
})
export class GurugranthsahibsearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  param:Array<string> = ['ggs'];
  footerColor = "#2f4203";
  public additional_flag: boolean = true;
  searchText: string;
  isUnicode: boolean;
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.searchText = localStorage.getItem('ggs-search') || '';
    if(this.searchText) {
      this.isUnicode = true;
    }
    this.titleService.setTitle("Advanced Search Sri Guru Granth Sahib :- Search Gurbani.com");
    this.meta.updateTag({name: 'Description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..'});
    this.meta.updateTag({property: 'og:description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'});
    this.meta.updateTag({property: 'og:title', content: 'Advanced Search Sri Guru Granth Sahib :- Search Gurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
  }

}
