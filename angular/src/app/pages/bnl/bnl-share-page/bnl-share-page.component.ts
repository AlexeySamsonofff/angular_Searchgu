import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bnl-share-page',
  templateUrl: './bnl-share-page.component.html',
  styleUrls: ['./bnl-share-page.component.scss']
})
export class BnlSharePageComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b";

  public page_info: any;
  public page_no: any;
  public lineno: any;
  public highlight_punjabi: string;
  public subtitle: string;
  public type: string;

  public title: string;
  public max_page: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.highlight_punjabi = '';
    this.route.params.subscribe(p=>{
      if(!p) return;
      this.page_no = p.page_no;
      this.lineno = p.lineno || 1;
      this.type = p.type;

      this.init();
      this.gotoPage(this.page_no);
    })
  }

  init() {
    let ret = "";
    let maxpage = 0;
    switch (this.type) {
      case "ghazal":
      {
        ret = "Bhai Nand Lal -Divan-e-Goya: Ghazals";
        maxpage = 63;
        break;
      }
      case "quatrains":
      {
        ret = "Bhai Nand Lal - Rubaayee";
        maxpage = 19;
        break;
      }
      case "zindginama": {
        ret = "Bhai Nand Lal - Zindginama";
        maxpage = 42;
        break;
      }
      case "ganjnama": {
        ret = "Bhai Nand Lal - Ganjnama";
        maxpage = 19;
        break;
      }
      case "jot-bikas": {
        ret = "Bhai Nand Lal - Jot Bikas";
        maxpage = 4;
        break;
      }
      case "jot-bikas-persian": {
        ret = "Bhai Nand Lal - Jot Bikas: Persian";
        maxpage = 15;
        break;
      }
      case "rahitnama": {
        ret = "Bhai Nand Lal - Rahitnama";
        maxpage = 4;
        break;
      }
      case "tankahnama": {
        ret = "Bhai Nand Lal - Tankahnama";
        maxpage = 6;
        break;
      }
      default: {
        ret = "Bhai Nand Lal";
        maxpage = 0;
        break;
      }
    }
    this.title = ret;
    this.max_page = maxpage;
  }

  gotoPage(page){
    this.searchService.get_shared_bnl_page(this.type, 'page', page, this.lineno).subscribe(res=>{
      this.page_info = res;
      this.ts.setTitle(res.meta_title);
      this.meta.updateTag({name: 'Description', content: res.meta_description});
      this.meta.updateTag({property: 'og:description', content: res.meta_description});
      this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
      this.meta.updateTag({property: 'og:title', content: res.meta_title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
    })
  }
}
