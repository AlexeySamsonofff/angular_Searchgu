import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pagebypage',
  templateUrl: './pagebypage.component.html',
  styleUrls: ['./pagebypage.component.scss']
})
export class PagebypageComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public cur_page:number;
  public page_info: any;
  public max_page: number = 1040;
  public cur_selected_line: number;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.cur_page = 65;
    this.cur_selected_line = 0;
    this.route.params.subscribe(p=>{
      if(p){
        this.cur_page = p.page_no;
        this.cur_selected_line = p.line_no;
      }else{
        this.cur_page = 65;
      }
      this.gotoPage(this.cur_page);
    })
  }

  gotoPage(page: any){
      this.searchService.get_page_by_page(page, this.cur_selected_line).subscribe(res=>{
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
