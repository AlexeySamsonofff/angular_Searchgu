import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { KeyPress } from 'src/app/global/utility';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ressri-gur-pratap-suraj-granth',
  templateUrl: './ressri-gur-pratap-suraj-granth.component.html',
  styleUrls: ['./ressri-gur-pratap-suraj-granth.component.scss']
})
export class RessriGurPratapSurajGranthComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  showKeyboard: boolean;
  q: string;
  constructor(private ts: Title, private searchService: SearchService, private router: Router, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.ts.setTitle('Sri Gur Pratap Suraj Granth -:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com');
    this.meta.addTags([
      {name: 'Description', content: 'Sri Gur Pratap Suraj Granth by Kavi Bhai Santokh Singh'},
      {name: 'og:description', content: 'Sri Gur Pratap Suraj Granth by Kavi Bhai Santokh Singh'},
      {name: 'Keywords', content: 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, '},
      {name: 'og:title', content: 'Sri Gur Pratap Suraj Granth -:-ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗਰੰਥ   :- SearchGurbani.com'}
    ]);
  }


  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
  }

  do_search() {
    let val = document.forms['myForm'].outText.value;
    localStorage.setItem('book_2_keyword', val);
    this.router.navigate(['/sri-gur-pratap-suraj-granth/search-preview']);
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
  }
}
