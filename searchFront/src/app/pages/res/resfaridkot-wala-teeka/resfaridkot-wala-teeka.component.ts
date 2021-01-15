import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-resfaridkot-wala-teeka',
  templateUrl: './resfaridkot-wala-teeka.component.html',
  styleUrls: ['./resfaridkot-wala-teeka.component.scss']
})
export class ResfaridkotWalaTeekaComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359";
  showKeyboard: boolean;

  q: string;
  constructor(private ts: Title, private searchService: SearchService, private router: Router, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.ts.setTitle('Faridkot Wala Teeka:ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ :- SearchGurbani.com');
    this.meta.updateTag({name: 'Description', content: 'Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.'});
    this.meta.updateTag({property: 'og:description', content: 'Faridkot Wala Teeka is classical exegesis of Sri Guru Granth Sahib in Braj Bhasha by a team of scholars of Nirmala Sect.'});
    this.meta.updateTag({name: 'Keywords', content: 'Faridkot Wala, Teeka , Granth, Sahib, Nirmala, Guru Granth, Sikh, Gurbani '});
    this.meta.updateTag({property: 'og:title', content: 'Faridkot Wala Teeka:ਫਰੀਦਕੋਟ ਵਾਲਾ ਟੀਕਾ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
  }


  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
  }

  do_search() {
    let val = document.forms['myForm'].outText.value;
    localStorage.setItem('book_3_keyword', val);
    this.router.navigate(['/faridkot-wala-teeka/search-preview']);
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
  }
}
