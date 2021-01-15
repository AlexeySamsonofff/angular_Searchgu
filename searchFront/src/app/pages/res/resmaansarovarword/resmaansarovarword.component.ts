import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-resmaansarovarword',
  templateUrl: './resmaansarovarword.component.html',
  styleUrls: ['./resmaansarovarword.component.scss']
})
export class ResmaansarovarwordComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  alphas: string[];
  keyword: string;
  pageInfo: any;
  constructor(private ts: Title, private route: ActivatedRoute, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.alphas = ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ', 'ਟ', 'ਠ', 'ਡ',
    'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਸ', 'ਹ', 'ਖ਼'];
    this.keyword = localStorage.getItem('maan_alpha') || this.alphas[0];
    this.pageInfo = {words: []};
    this.get_pageinfo();
  }

  get_pageinfo() {
    this.searchService.maansarovar_word(this.keyword,  'alpha').subscribe(res=>{
      this.ts.setTitle(res.meta_title);
      this.meta.addTags([
        {name: 'Description', content: 'Maansarovar'},
        {name: 'og:description', content: 'Maansarovar'},
        {name: 'Keywords', content: 'maansarovar'},
        {name: 'og:title', content: 'Maansarovar :- SearchGurbani.com'}
      ]);
      this.pageInfo = res;
    })
  }

  goTomaansarovarWord(alpha) {
    this.keyword = alpha;
    localStorage.setItem('maan_alpha', this.keyword);
    this.get_pageinfo();
  }
}
