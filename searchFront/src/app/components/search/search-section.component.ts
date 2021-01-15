import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {
  @Input() footerColor: string;
  @Input() showAdvance: boolean;
  @Input() addFilter: boolean;
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  public allwords: any[]; // all autocomplete words
  public allSearchTypes: any[];
  public searchType: string;

  public allLanguages: any[];
  public language: string;
  public q: string; // search text

  public isautocomplete: boolean;
  public show_autoset: boolean;
  public _Language: any;

  public showKeyboard: boolean;
  public active_tab: string;

  public search_result: any[]; // ----------- for testing

  public selected_author: any;
  public selected_raag: any;
  public allAuthors: any[];
  public allRaags: any[];
  public page_from: number;
  public page_to: number;

  // for bnl
  public bnlSelect: any;
  public allBnlCategory: any[];
  public showSearchResult: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.search_result = [];
    this.showSearchResult = false;
    this.active_tab = "ggs";
    let fullString;
    this.showKeyboard = true;
    this.allwords = [];
    this.isautocomplete = false;
    this.show_autoset = false;

    this.allAuthors = [];
    this.allRaags = [];
    this.selected_raag = "";
    this.selected_author = "";
    this.page_from = 1;
    this.page_to = 1430; // for ggs

    this.allSearchTypes = [
      {label: 'First letter Beginning', value: 'FL_begin'},
      {label: 'First letter Anywhere', value: 'FL_any'},
      {label: 'Phrase', value: 'PHRASE'},
    ];
    this.searchType = this.allSearchTypes[0].value;

    this.allLanguages = [
      {label: 'Phonetic Roman', value: 'ROMAN'},
      {label: 'Gurmukhi ASCII', value: 'PUNJABI-ASC'},
      {label: 'Gurmukhi Unicode', value: 'PUNJABI'},
    ];
    this.language = this.allLanguages[0].value;

    this.searchService.get_authors().subscribe(res=>{
      this.allAuthors = res.sort((a, b)=>(a.ID>b.ID)?1:-1);
    });

    this.searchService.get_raags().subscribe(res=>{
      this.allRaags = res.sort((a, b)=>(a.id>b.id)?1:-1);
    });

    // if(this.active_tab === 'bnl') {
    //   this.searchService.bnl_get_all_category().subscribe(res=>{
    //     this.allBnlCategory = res;
    //   })
    // }
    this.searchService.bnl_get_all_category().subscribe(res=>{
      this.allBnlCategory = res;
    })

    let cached_params = localStorage.getItem('home_search_params');
    if(cached_params) {
      cached_params = JSON.parse(cached_params);
      this.q = (Object)(cached_params).q;
      this.searchType =(Object)(cached_params).searchType;
      this.language =(Object)(cached_params).language;
      if(this.q !== '') {
        this.showSearchResult = true;
      }
      this.handleSearch();
    }
  }

  handleSearchChange() {
    this.showSearchResult = true;
    if(this.isautocomplete){
      this.show_autoset = true;
      let param = {
        q: this.q,
        searchtype: this.searchType,
        language: this.language,
        ggs: true,
        ak: true,
        bgv: true,
        dg: true,
        ks: true,
        bnl: true,
      };
      this.searchService.get_allwords(param).subscribe(res=>{
        if(res.status === 'success') {
          this.allwords = res.allwords;
        }else{
          // alert(res.msg);
        }
      })
    }
    this.handleSearch();
  }

  onSearchChange(){
  }

  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
    this.handleSearchChange();
  }


  handleSearch() {
    localStorage.setItem('home_search_params', JSON.stringify({q: this.q, searchType: this.searchType, language: this.language}));
    let param = {
      start: 0,
      length: 20,
      Searchtype: this.searchType,
      language: this.language,
      scripture: this.active_tab,
      SearchData: this.q,
      author: this.selected_author,
      raag: this.selected_raag,
      page_from: this.page_from,
      page_to: this.page_to,
      bnlSelect: this.bnlSelect
    };
    this.searchService.get_datatable_data(param).subscribe(res=>{
      this.search_result = res.data;
    })
  }

  handleReset() {
    this.q = '';
    this.searchType = this.allSearchTypes[0].value;
    this.language = this.allLanguages[0].value;
    this.search_result = [];
    this.showSearchResult = false;
  }

  handleClear() {
    this.q = '';
  }

  handleSearchTypeChange() {
    this.q = '';
  }

  handleLanguageChange() {
    this.q = '';
  }

  hideAutoset(e: Event){
    this.show_autoset = false;
  }

  change_tab(tabname){
    if(this.active_tab === tabname){
      return;
    }
    this.active_tab = tabname;
    this.page_from = 1;
    switch(tabname){
      case "ggs": {
        this.page_to = 1430;
        break;
      }
      case "ak": {
        this.page_to = 1040;
        this.page_from = 65;
        break;
      }
      case "bgv": {
        this.page_to = 41;
        break;
      }
      case "dg": {
        this.page_to = 2820;
        break;
      }
      case "ks": {
        this.page_to = 675;
        break;
      }
      case "bnl": {
        this.page_to = 150;
        break;
      }
      default: {
        this.page_to = 1430;
        break;
      }
    }
    this.handleSearch();
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearchChange();
  }

  min(val1, val2) {
    return val1 > val2 ? val2: val1;
  }
}
