import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-resguru-granth-kosh',
  templateUrl: './resguru-granth-kosh.component.html',
  styleUrls: ['./resguru-granth-kosh.component.scss']
})
export class ResguruGranthKoshComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  showKeyboard: boolean;
  alphas: any[];
  allWords: any[];
  table_name: string;
  q: string;
  show_autoset: boolean;
  constructor(private titleService: Title, private router: Router, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.alphas = ['ੳ','ਅ','ੲ','ਸ','ਹ','ਕ','ਖ','ਗ','ਘ','ਙ','ਚ','ਛ','ਜ','ਝ','ਞ','ਟ','ਠ','ਡ','ਢ','ਣ','ਤ','ਥ','ਦ','ਧ','ਨ','ਪ','ਫ','ਬ','ਭ','ਮ','ਯ','ਰ','ਲ','ਵ','ੜ'];
    this.titleService.setTitle('Guru Granth Kosh-Dr Gurcharan Singh-:-ਗੁਰੂ ਗਰੰਥ ਕੋਸ਼ -:- SearchGurbani.com');
    this.meta.updateTag({name: 'Description', content: 'Sri Guru Granth Kosh by Dr Gurcharan Singh is a dictionary of Sikh Scriptures and books on Sikh Religion. '});
    this.meta.updateTag({property: 'og:description', content: 'Sri Guru Granth Kosh by Dr Gurcharan Singh is a dictionary of Sikh Scriptures and books on Sikh Religion. '});
    this.meta.updateTag({name: 'Keywords', content: 'Sri Guru ,Granth ,Kosh '});
    this.meta.updateTag({property: 'og:title', content: 'Guru Granth Kosh-Dr Gurcharan Singh-:-ਗੁਰੂ ਗਰੰਥ ਕੋਸ਼ -:- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

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
    localStorage.setItem('guru_granth_kosh_alpha', val);
    this.router.navigate(['/guru-granth-kosh/view']);
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }
}
