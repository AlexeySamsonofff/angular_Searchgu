import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sgaarti',
  templateUrl: './sgaarti.component.html',
  styleUrls: ['./sgaarti.component.scss']
})
export class SgaartiComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b";
  public cur_page:number;
  public page_info: any;
  public max_page: number = 4;

  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.cur_page = 1;
    this.gotoPage(this.cur_page);
  }

  gotoPage(page: any){
      this.searchService.aarti(page).subscribe(res=>{
        this.page_info = res;
        this.titleService.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      })
  }
}
