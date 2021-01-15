import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-resmaansarovar-quotations',
  templateUrl: './resmaansarovar-quotations.component.html',
  styleUrls: ['./resmaansarovar-quotations.component.scss']
})
export class ResmaansarovarQuotationsComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param:Array<string> = ['bgv'];
  footerColor = "#4f022c";
  word: string;
  pageInfo: any;
  constructor(private route: ActivatedRoute, private router: Router, private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.word = "";
    this.pageInfo = {quotations: []};
    this.route.params.subscribe(p=>{
      this.word = p.word;
      this.searchService.maansarovar_quotations(this.word).subscribe(res=>{
        this.ts.setTitle(res.meta_title);
        this.meta.addTags([
          {name: 'Description', content: 'Maansarovar'},
          {name: 'og:description', content: 'Maansarovar'},
          {name: 'Keywords', content: 'maansarovar'},
          {name: 'og:title', content: 'Maansarovar :- SearchGurbani.com'}
        ]);
        this.pageInfo = res;
      })
    });
  }

}
