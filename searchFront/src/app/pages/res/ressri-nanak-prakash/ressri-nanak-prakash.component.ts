import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-ressri-nanak-prakash',
  templateUrl: './ressri-nanak-prakash.component.html',
  styleUrls: ['./ressri-nanak-prakash.component.scss']
})
export class RessriNanakPrakashComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  showKeyboard: boolean;
  allWords: any[];
  table_name: string;
  q: string;
  show_autoset: boolean;
  constructor(private titleService: Title, private router: Router, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.titleService.setTitle('Guru Granth Kosh-Dr Gurcharan Singh-:-ਗੁਰੂ ਗਰੰਥ ਕੋਸ਼ -:- SearchGurbani.com');

    this.meta.addTags([
      {name: 'Description', content: 'Sri Gur Partap Suraj Granth authored by Kavi Churamani Bhai Santokh Singh ji, Doyen of Nirmala Sect, popularly known as Suraj Parkash is a voluminous classical medieval source of Sikh History and Philosophy.'},
      {name: 'og:description', content: 'Sri Gur Partap Suraj Granth authored by Kavi Churamani Bhai Santokh Singh ji, Doyen of Nirmala Sect, popularly known as Suraj Parkash is a voluminous classical medieval source of Sikh History and Philosophy.'},
      {name: 'Keywords', content: 'Sri ,Nanak ,Prakash. Granth, Gur, Pratap , Suraj, Santokh, '},
      {name: 'og:title', content: 'Guru Granth Kosh-Dr Gurcharan Singh-:-ਗੁਰੂ ਗਰੰਥ ਕੋਸ਼ -:- SearchGurbani.com'}
    ]);

    this.table_name = "Sri Guru Granth Kosh";
    this.allWords = [];
    this.show_autoset = true;
    this.q = '';
    this.handleSearch();
  }
  // '/guru-granth-kosh/view'
  goToggkview(alpha) {
    localStorage.setItem('guru_granth_kosh_alpha', alpha);
    this.router.navigate(['/guru-granth-kosh/view']);
  }

  handleSearchChange() {
    this.handleSearch();
  }

  onSearchChange(){
  }


  handleSearch() {
    this.searchService.get_resources_words(this.q, this.table_name).subscribe(res=>{
      if(res.status === false) {
        return;
      }
      this.show_autoset = true;
      this.allWords = res;
    })
  }

  hideAutoset(e: Event){
    this.show_autoset = false;
  }

  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }

  do_search() {
    let val = document.forms['myForm'].outText.value;
    localStorage.setItem('book_1_keyword', val);
    this.router.navigate(['/sri-nanak-prakash/search-preview']);
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }
}
