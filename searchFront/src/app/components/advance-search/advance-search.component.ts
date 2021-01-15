import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  @Input() footerColor: string;
  @Input() scripture: string;
  @Input() maxPage: number;
  @Input() firstPage: number;
  @Input() searchWord: string;
  @Input() isUnicodeSearch: boolean;

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
  // public active_tab: string;

  public search_result: any[]; // ----------- for testing
  public additional_flag: boolean;

  public selected_author: any;
  public selected_raag: any;
  public allAuthors: any[];
  public allRaags: any[];
  public page_from: number;
  public page_to: number;

  // for bnl
  public bnlSelect: any;
  public allBnlCategory: any[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.q = this.searchWord || '';
    this.allBnlCategory = [];
    this.bnlSelect = '';
    this.search_result = [
    ];
    this.allAuthors = [];
    this.allRaags = [];
    this.selected_raag = "";
    this.selected_author = "";
    this.page_from = this.firstPage || 1;
    this.page_to = this.maxPage || 1430;

    this.additional_flag = true;
    // this.scripture = "ggs";
    let fullString;
    this.showKeyboard = true;
    this.allwords = [];
    this.isautocomplete = false;
    this.show_autoset = false;
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

    if(this.isUnicodeSearch) {
      this.language = this.allLanguages[2].value;
      this.showKeyboard = false;
      this.searchType = this.allSearchTypes[1].value;
    }

    this.searchService.get_authors().subscribe(res=>{
      this.allAuthors = res.sort((a, b)=>(a.ID>b.ID)?1:-1);
    });
    this.searchService.get_raags().subscribe(res=>{
      this.allRaags = res.sort((a, b)=>(a.id>b.id)?1:-1);
    });
    if(this.scripture === 'bnl') {
      this.searchService.bnl_get_all_category().subscribe(res=>{
        this.allBnlCategory = res;
      })
    }

    if(this.q) {
      this.handleSearch();
    }
  }

  handleSearchChange() {

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
        bnl: true
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


  handleSearch() {
    let param = {
      start: 0,
      length: 20,
      Searchtype: this.searchType,
      language: this.language,
      scripture: this.scripture,
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

  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
    this.handleSearchChange();
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearchChange();
  }

  min(val1, val2) {
    return val1 > val2 ? val2: val1;
  }
}
