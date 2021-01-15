import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ggs-search-result',
  templateUrl: './ggs-search-result.component.html',
  styleUrls: ['./ggs-search-result.component.scss']
})
export class GgsSearchResultComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param: Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public lineno: number;
  public page_info: any;
  public max_page: number;
  public cur_page: number;

  public searchType: string;
  public language: string;
  public scripture: string;
  public searchData: string;
  public author: string;
  public raag: string;
  public page_from: number;
  public page_to: number;
  public search_url: string;
  public title: string;

  constructor(private router: Router, private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.title = "Sri Guru Granth Sahib";
    this.search_url = "/guru-granth-sahib/search";
    this.max_page = 1430;
    this.page_info = {lines: [], search_results_info: []};
    let param = localStorage.getItem('search-results');
    this.meta.updateTag({ name: 'Description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..' });
    this.meta.updateTag({ property: 'og:description', content: 'A comprehensive web site on research and  exploration of Sri Guru Granth Sahib, Amrit Keertan Gutka, Bhai Gurdas vaaran, Sri Dasam Granth Sahib, Bhai Nand Lal Baani,Mahan Kosh, Hukumnamas, Nitnem Baanis, exegesis , Gurbani, Gurbanee vichaar..' });
    this.meta.updateTag({ name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;' });
    this.meta.updateTag({ property: 'og:title', content: 'Advanced Search Sri Guru Granth Sahib :- Search Gurbani.com' });
    this.meta.updateTag({ property: 'og:url', content: location.href });
    this.meta.updateTag({ property: 'og:image', content: "/assets/img/share_scripture.png" });
    this.titleService.setTitle("Advanced Search Sri Guru Granth Sahib :- Search Gurbani.com");
    if (param) {
      let p = JSON.parse(param);
      this.searchType = p.searchType;
      this.language = p.language;
      this.scripture = p.scripture;
      this.searchData = p.searchData;
      this.author = p.author;
      this.raag = p.raag;
      this.page_from = p.page_from;
      this.page_to = p.page_to;
    }
    this.cur_page = 1;
    this.gotoPage();
  }

  gotoPage() {
    let param = {
      start: 0,
      length: 20,
      searchType: this.searchType,
      language: this.language,
      scripture: this.scripture,
      searchData: this.searchData,
      author: this.author,
      raag: this.raag,
      page: Math.floor(this.cur_page) - 1,
      page_from: this.page_from,
      page_to: this.page_to,
      tableId: '',
      case: '',
    };
    this.searchService.get_search_result(param).subscribe(res => {
      this.page_info = res;
    })
  }

  pageChanged(event: any) {
    this.gotoPage();
  }

  goToSearch() {
    this.router.navigate([this.search_url]);
  }

  min(val1, val2) {
    return val1 > val2 ? val2 : val1;
  }

  display(string: string) {
    let regex = new RegExp(this.searchData, 'g');
    let str = string.replace(regex, `<span class="hl">${this.searchData}</span>`);
    let ret = `<small>${str}</small>`;
    return ret;
  }
}
