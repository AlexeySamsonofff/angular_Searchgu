import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-scripturesearch',
  templateUrl: './scripturesearch.component.html',
  styleUrls: ['./scripturesearch.component.scss']
})
export class ScripturesearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile16.jpg)";
  param:Array<string> = ["scripSearch", '#024f5b', '#046f80'];
  footerColor = "#024f5b"

  constructor(private titleService: Title, private meta: Meta){}
  ngOnInit(){
    this.meta.addTags([
      {name: 'Description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..'},
      {name: 'og:description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..'},
      {name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'},
      {name: 'og:title', content: 'Search Gurbani: Gurbani Research Website'}
    ]);
    this.titleService.setTitle("Search Gurbani: Gurbani Research Website");
  }
}


