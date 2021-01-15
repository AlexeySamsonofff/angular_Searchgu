import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bnl-verse',
  templateUrl: './bnl-verse.component.html',
  styleUrls: ['./bnl-verse.component.scss']
})
export class BnlVerseComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public lineno: number;
  public page_info: any;
  public max_page: number;
  public first_page: number;

  public title: string;
  public important_field: string;
  private baseUrl: string;
  private scripture: string;
  private type: string;
  public offset: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute,
    private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.title = '';
    this.important_field = 'pagelineno';
    this.baseUrl = 'bhai-nand-lal';
    this.scripture = 'bnl';

    this.max_page = 1430;
    this.page_info = {lines: []};
    this.first_page = 1;
    this.route.params.subscribe(p=>{
      this.first_page = p.page_no;
      this.lineno = p.line_no;
      this.type = p.type;
      this.init();
      this.gotoPage(this.first_page);
    })
  }

  init() {
    let ret = "";
    this.offset = 0;
    switch (this.type) {
      case "ghazal":
      {
        ret = "Bhai Nand Lal -Divan-e-Goya: Ghazals";
        break;
      }
      case "quatrains":
      {
        ret = "Bhai Nand Lal - Rubaayee";
        break;
      }
      case "zindginama": {
        ret = "Bhai Nand Lal - Zindginama";
        break;
      }
      case "ganjnama": {
        ret = "Bhai Nand Lal - Ganjnama";
        break;
      }
      case "jot-bikas": {
        ret = "Bhai Nand Lal - Jot Bikas";
        this.offset = 158;
        break;
      }
      case "jot-bikas-persian": {
        ret = "Bhai Nand Lal - Jot Bikas: Persian";
        this.offset = 143;
        break;
      }
      case "rahitnama": {
        ret = "Bhai Nand Lal - Rahitnama";
        this.offset = 162;
        break;
      }
      case "tankahnama": {
        ret = "Bhai Nand Lal - Tankahnama";
        this.offset = 166;
        break;
      }
      default: {
        ret = "Bhai Nand Lal";
        break;
      }
    }
    this.title = ret;
  }

  gotoPage(page: any){
      this.searchService.get_verse(page, this.baseUrl, this.scripture, this.type).subscribe(res=>{
        this.page_info = res;
        this.first_page = res.start_page;
        this.max_page = res.end_page;
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
        this.titleService.setTitle(res.meta_title);
      })
  }
}
