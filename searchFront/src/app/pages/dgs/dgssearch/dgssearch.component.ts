import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dgssearch',
  templateUrl: './dgssearch.component.html',
  styleUrls: ['./dgssearch.component.scss']
})
export class DGSsearchComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile13.jpg)";
  param:Array<string> = ['dgs'];
  footerColor = "#464102";
  additional_flag: boolean;
  constructor(private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.ts.setTitle("Advance Search  Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Advance Search  Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Advance Search  Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Advance Search  Sri Dasam Granth Sahib : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.additional_flag = true;
  }

}
