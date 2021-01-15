import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ggs-print-preview',
  templateUrl: './ggs-print-preview.component.html',
  styleUrls: ['./ggs-print-preview.component.scss']
})
export class GgsPrintPreviewComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public lineno: number;
  public page_info: any;
  public max_page: number;
  public first_page: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }
  ngOnInit() {
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
      this.searchService.get_ang_by_ang(page, this.lineno).subscribe(res=>{
        this.page_info = res;
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
