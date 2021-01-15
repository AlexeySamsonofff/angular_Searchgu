import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-kssks',
  templateUrl: './kssks.component.html',
  styleUrls: ['./kssks.component.scss']
})
export class KssksComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile17.jpg)";
  param:Array<string> = ['ks'];
  footerColor = "#090241";
  additional_flag: boolean;
  constructor(private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.additional_flag = true;
    this.ts.setTitle("Advance Search  Kabit Bhai Gurdas : ਕਬਿਤ ਭਾਈ  ਗੁਰਦਾਸ");
    this.meta.updateTag({name: 'Description', content: 'Advance Search  Kabit Bhai Gurda : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Advance Search  Kabit Bhai Gurda : ਸ੍ਰੀ ਦਸਮ ਗ੍ਰੰਥ ਸਾਹਿਬ :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Advance Search  Kabit Bhai Gurda : ਕਬਿਤ ਭਾਈ  ਗੁਰਦਾਸ'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
  }

}
