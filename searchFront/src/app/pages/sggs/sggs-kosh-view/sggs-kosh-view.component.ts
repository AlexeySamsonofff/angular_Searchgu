import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sggs-kosh-view',
  templateUrl: './sggs-kosh-view.component.html',
  styleUrls: ['./sggs-kosh-view.component.scss']
})
export class SggsKoshViewComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  public page_info: any;
  public keyword: string;
  public alpha: string;
  public page: number;
  public alphas: any[];
  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.page_info = {lines: [], search_results_info: []};
    this.keyword = localStorage.getItem('sggs_kosh_keyword');
    if(!this.keyword) {
      this.keyword =  "ੳ";
    }
    this.alpha = "alpha";
    this.page = 1;
    this.alphas = ['ੳ','ਅ','ੲ','ਸ','ਹ','ਕ','ਖ','ਗ','ਘ','ਙ','ਚ','ਛ','ਜ','ਝ','ਞ','ਟ','ਠ','ਡ','ਢ','ਣ','ਤ','ਥ','ਦ','ਧ','ਨ','ਪ','ਫ','ਬ','ਭ','ਮ','ਯ','ਰ','ਲ','ਵ','ੜ'];
    this.get_pageinfo();
  }

  get_pageinfo(){
    this.searchService.sggs_kosh_view(this.keyword, this.alpha, this.page - 1).subscribe(res=>{
      if(res){
        this.page_info = res;
      }
    });
  }

  setKeyword(alpha) {
    this.keyword = alpha;
    localStorage.setItem('sggs_kosh_keyword', this.keyword);
    this.get_pageinfo();
  }

  pageChanged(event: any) {
    this.get_pageinfo();
  }

  goGgsSearch(word: string) {
    let param = {
      scripture: 'ggs',
      searchData: word,
      searchType: 'PHRASE',
      language: 'PUNJABI',
      raag: '',
      author: '',
      page_from: 1,
      page_to: 1430
    }
    localStorage.setItem('search-results', JSON.stringify(param));
    this.router.navigate(['/guru-granth-sahib/search-results']);
  }
}
