import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gurugranthsahibindexauthor',
  templateUrl: './gurugranthsahibindexauthor.component.html',
  styleUrls: ['./gurugranthsahibindexauthor.component.scss']
})
export class GurugranthsahibindexauthorComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  param:Array<string> = ['ggs'];
  footerColor = "#2f4203";
  public authors: any[];
  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.authors = [];
    this.titleService.setTitle("Sri Guru Granth Sahib Author Index :- SearchGurbani.com");

    this.meta.updateTag({name: 'Description', content: 'Sri Guru Granth Sahib Author Index :SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Sri Guru Granth Sahib Author Index :SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'});
    this.meta.updateTag({property: 'og:title', content: 'Sri Guru Granth Sahib Author Index :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
    this.searchService.get_authors().subscribe(res=>{
      if(res) {
        this.authors = res;
      }
    })
  }

}
