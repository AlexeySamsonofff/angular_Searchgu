import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-resmaansarovar',
  templateUrl: './resmaansarovar.component.html',
  styleUrls: ['./resmaansarovar.component.scss']
})
export class ResmaansarovarComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  showKeyboard: boolean;
  alphas: any[];
  allWords: any[];
  table_name: string;
  q: string;
  show_autoset: boolean;
  constructor(private titleService: Title, private router: Router, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.alphas = ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ',
    'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਸ', 'ਹ', 'ਖ਼'];
    this.titleService.setTitle('Maansarovar :- SearchGurbani.com');

    this.meta.addTags([
      {name: 'Description', content: 'Maansarovar'},
      {name: 'og:description', content: 'Maansarovar'},
      {name: 'Keywords', content: 'maansarovar'},
      {name: 'og:title', content: 'Maansarovar :- SearchGurbani.com'}
    ]);

    this.table_name = "GurShabad Ratanakar Mahankosh";
    this.allWords = [];
    this.show_autoset = true;
    this.q = '';
    this.handleSearch();
  }
  // '/maansarovar/word'
  goTomaansarovarWord(alpha) {
    localStorage.setItem('maan_alpha', alpha);
    this.router.navigate(['/maansarovar/words']);
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
    localStorage.setItem('maan_alpha', val);
    this.router.navigate(['/maansarovar/words']);
  }
  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }
}
