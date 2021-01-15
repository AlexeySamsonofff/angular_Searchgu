import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bnlsearch',
  templateUrl: './bnlsearch.component.html',
  styleUrls: ['./bnlsearch.component.scss']
})
export class BnlsearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  constructor(private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.ts.setTitle("Advance Search Bhai Nand Lal:- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Advance Search Bhai Nand Lal  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content:'Advance Search Bhai Nand Lal  :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'});
    this.meta.updateTag({property: 'og:title', content: 'Advance Search Bhai Nand Lal:- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
  }

}
