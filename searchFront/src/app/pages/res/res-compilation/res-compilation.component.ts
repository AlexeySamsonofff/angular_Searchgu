import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-res-compilation',
  templateUrl: './res-compilation.component.html',
  styleUrls: ['./res-compilation.component.scss']
})
export class ResCompilationComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359";

  pageno: number;
  pageInfo: any;
  volume_id: number;
  lang: string;
  maxPage: number;

  constructor(private route: ActivatedRoute, private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.maxPage = 271;
    this.volume_id = 0;
    this.lang = '';
    this.pageInfo = {lines: []};
    this.route.params.subscribe(p=>{
      this.pageno = p.pageno || 1;
      this.goToPage();
    })
  }

  goToPage() {
    this.searchService.compilation(this.pageno, this.volume_id, this.lang).subscribe(res=>{
      this.pageInfo = res;
      this.ts.setTitle(res.meta_title);
      this.meta.updateTag({name: 'Description', content: res.meta_description});
      this.meta.updateTag({property: 'og:description', content: res.meta_description});
      this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
      this.meta.updateTag({property: 'og:title', content: res.meta_title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
    })
  }

  begin() {
    this.pageno = 1;
    this.goToPage();
  }

  back() {
    this.pageno = Math.floor(this.pageno) - 1;
    this.goToPage();
  }

  next() {
    this.pageno = Math.floor(this.pageno) + 1;
    this.goToPage();
  }

  last() {
    this.pageno = this.maxPage;
    this.goToPage();
  }

  display(html: string) {
    let str = html.replace(/\n/g, '<br/>');
    return str.replace(/href="/g, 'href="/compilation/page/');
  }

  print() {
    window.open(`/compilation/page/${this.pageno}/print_view`, '_blank', 'width=600,height=400,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0');
  }

}
