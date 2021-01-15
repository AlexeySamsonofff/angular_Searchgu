import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-res-sggsg-page',
  templateUrl: './res-sggsg-page.component.html',
  styleUrls: ['./res-sggsg-page.component.scss']
})
export class ResSggsgPageComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  public pageInfo: any;
  public pageno: number;
  public volume_id: number;
  public maxPage: number;
  display_field: string;
  book_lang: string;

  baseUrl: string;

  constructor(private router: Router, private ts: Title, private searchService: SearchService, private route: ActivatedRoute, private meta: Meta) { }

  ngOnInit() {
    this.baseUrl = '/sri-gur-pratap-suraj-granth';
    this.pageno = 1;
    this.volume_id = 1;
    this.pageInfo = {lines: []};
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
          this.volume_id = p.volumeno;
        }
      }
      this.get_page_info(this.pageno);
    });
  }

  get_page_info(page: number) {

    this.searchService.sgpsg_page(page, this.volume_id).subscribe(res=>{

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
