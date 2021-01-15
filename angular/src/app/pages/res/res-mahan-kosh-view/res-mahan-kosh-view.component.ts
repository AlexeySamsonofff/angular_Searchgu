import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-res-mahan-kosh-view',
  templateUrl: './res-mahan-kosh-view.component.html',
  styleUrls: ['./res-mahan-kosh-view.component.scss']
})
export class ResMahanKoshViewComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  public page_info: any;
  public keyword: string;
  public alpha: string;
  public page: number;
  public alphas: any[];
  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute, private ts: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.page_info = {lines: [], search_results_info: []};
    this.keyword = localStorage.getItem('mahan_kosh_alpha');
    if(!this.keyword) {
      this.keyword =  "ੳ";
    }
    this.alpha = "alpha";
    this.page = 1;
    this.alphas = ['ੳ','ਅ','ੲ','ਸ','ਹ','ਕ','ਖ','ਗ','ਘ','ਙ','ਚ','ਛ','ਜ','ਝ','ਞ','ਟ','ਠ','ਡ','ਢ','ਣ','ਤ','ਥ','ਦ','ਧ','ਨ','ਪ','ਫ','ਬ','ਭ','ਮ','ਯ','ਰ','ਲ','ਵ','ੜ'];
    this.get_pageinfo();
  }

  get_pageinfo(){
    this.searchService.mahan_kosh_view(this.keyword, this.alpha, this.page - 1).subscribe(res=>{
      if(res){
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
        this.page_info = res;
      }
    });
  }

  setKeyword(alpha) {
    this.keyword = alpha;
    localStorage.setItem('mahan_kosh_alpha', this.keyword);
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
