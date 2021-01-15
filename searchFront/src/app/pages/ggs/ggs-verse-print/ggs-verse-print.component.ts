import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ggs-verse-print',
  templateUrl: './ggs-verse-print.component.html',
  styleUrls: ['./ggs-verse-print.component.scss']
})
export class GgsVersePrintComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
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

  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.title = 'Sri Guru Granth Sahib';
    this.important_field = 'lineno';
    this.baseUrl = 'guru-granth-sahib';
    this.scripture = 'ggs';

    this.max_page = 1430;
    this.page_info = {lines: []};
    this.first_page = 1;
    this.route.params.subscribe(p=>{
      this.first_page = p.page_no;
      this.lineno = p.line_no;
      this.gotoPage(this.first_page);
    })
  }

  gotoPage(page: any){
      this.searchService.get_verse(page, this.baseUrl, this.scripture).subscribe(res=>{
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
