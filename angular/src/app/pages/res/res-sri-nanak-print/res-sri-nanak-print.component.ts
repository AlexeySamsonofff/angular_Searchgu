import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-res-sri-nanak-print',
  templateUrl: './res-sri-nanak-print.component.html',
  styleUrls: ['./res-sri-nanak-print.component.scss']
})
export class ResSriNanakPrintComponent implements OnInit {
  footerColor = "#7b0400";
  pageno: number;
  volumeno: number;
  pageInfo: any;
  maxPage: number;
  display_field: string;
  book_lang: string;
  constructor(private route: ActivatedRoute, private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.pageno = 1;
    this.volumeno = 1;
    this.maxPage = 1267;
    this.pageInfo = { lines: [] };
    this.display_field = 'text';
    this.book_lang = localStorage.getItem('book_lang') || '';
    if(this.book_lang === '' || this.book_lang === 'gurmukhi') {
      this.display_field = 'text';
    }else{
      this.display_field = 'hindi';
    }
    this.route.params.subscribe(p=>{
      if(p.pageno) {
        this.pageno = p.pageno;
        if(p.lang) {
          this.book_lang = p.lang;
          localStorage.setItem('book_lang', this.book_lang);
          if(this.book_lang === '' || this.book_lang === 'gurmukhi') {
            this.display_field = 'text';
          }else{
            this.display_field = 'hindi';
          }
        }
        if(p.volumeno){
          this.volumeno = p.volumeno;
        }
      }
      this.get_page_info(this.pageno);
    });
  }

  get_page_info(pageno: number) {
    this.searchService.sri_nanak_prakash_page(pageno, "volume", this.volumeno).subscribe(res=>{
      this.pageInfo = res;
      this.maxPage = parseInt(res.lines_count);
      this.ts.setTitle(res.meta_title);
      this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
    })
  }
}
