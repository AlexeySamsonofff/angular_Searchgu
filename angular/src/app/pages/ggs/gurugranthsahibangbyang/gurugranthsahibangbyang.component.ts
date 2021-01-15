import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gurugranthsahibangbyang',
  templateUrl: './gurugranthsahibangbyang.component.html',
  styleUrls: ['./gurugranthsahibangbyang.component.scss']
})
export class GurugranthsahibangbyangComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param: Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public cur_page: number;
  public page_info: any;
  public max_page: number = 1430;
  public audio_link: string;
  public audio_type: string;

  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = { lines: [] };
    this.cur_page = 1;

    this.gotoPage(this.cur_page);
  }



  gotoPage(page: any) {
    this.searchService.get_ang_by_ang(page, '').subscribe(res => {
      this.page_info = res;
      this.titleService.setTitle(res.meta_title);
      this.meta.updateTag({ name: 'Description', content: res.meta_description });
      this.meta.updateTag({ property: 'og:description', content: res.meta_description });
      this.meta.updateTag({ name: 'Keywords', content: res.meta_keywords });
      this.meta.updateTag({ property: 'og:title', content: res.meta_title });
      this.meta.updateTag({ property: 'og:url', content: location.href });
      this.meta.updateTag({ property: 'og:image', content: "/assets/img/share_scripture.png" })
    })
  }
}
