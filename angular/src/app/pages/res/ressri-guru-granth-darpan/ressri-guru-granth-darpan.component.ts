import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-ressri-guru-granth-darpan',
  templateUrl: './ressri-guru-granth-darpan.component.html',
  styleUrls: ['./ressri-guru-granth-darpan.component.scss']
})
export class RessriGuruGranthDarpanComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  constructor(private titleService: Title, private router: Router, private meta: Meta) { }
  keys: any[];
  showKeyboard: boolean;
  keyword: string;

  ngOnInit() {
    this.showKeyboard = true;
    this.keyword = '';
    // this.keys = [
    //   ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ', 'ਢ'],
    //   ['ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', ''],
    //   ['', 'ਲ', 'ਲ਼', 'ਵ', 'ਸ਼', 'ਸ', 'ਹ', 'ਖ਼', 'ਗ਼', 'ਜ਼', 'ੜ', 'ਫ਼', '', ''],
    //   ['ਅ', 'ਆ', 'ਇ', 'ਈ', 'ਉ', 'ਊ', 'ਏ', 'ਐ', 'ਓ', 'ਔ', 'ੲ', 'ੳ', '', 'space'],
    //   ['ਂ', '਼', 'ਾ', 'ਿ', 'ੀ', 'ੁ', 'ੂ', 'ੇ', 'ੈ', 'ੋ', 'ੌ', '੍', 'ੰ', 'ੱ'],
    //   ['', 'ੴ', '੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯', '☬', ''],
    // ];
    this.titleService.setTitle('Sri Guru Granth Darpan : ਸ੍ਰੀ ਗੁਰੂ ਗਰੰਥ ਦਰ੍ਪਣ:Prof Sahib Singh:- SearchGurbani.com');
    this.meta.addTags([
      {name: 'Description', content: 'Siri Guru Granth Darpan by Professor Sahib Singh Gurmukhi text to Punjabi (Gurmukhi) translation of all of Siri Guru Granth Sahib. '},
      {name: 'og:description', content: 'Siri Guru Granth Darpan by Professor Sahib Singh Gurmukhi text to Punjabi (Gurmukhi) translation of all of Siri Guru Granth Sahib. '},
      {name: 'Keywords', content: 'Guru Granth Darpan,Guru Granth, sahib, Singh, exegesis'},
      {name: 'og:title', content: 'Sri Guru Granth Darpan : ਸ੍ਰੀ ਗੁਰੂ ਗਰੰਥ ਦਰ੍ਪਣ:Prof Sahib Singh:- SearchGurbani.com'}
    ]);
  }

  onKey(evt: any) {
    KeyPress(evt);
    this.keyword = this.searchText.nativeElement.value;
  }

  onKeyPush() {
    this.keyword = this.searchText.nativeElement.value;
  }

  doSearch() {
    localStorage.setItem('book_4_keyword', this.keyword);
    this.router.navigate(['/sri-guru-granth-darpan/search-preview']);
  }

}
