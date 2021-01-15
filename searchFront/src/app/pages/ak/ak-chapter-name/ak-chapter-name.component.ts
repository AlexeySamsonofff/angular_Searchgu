import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ak-chapter-name',
  templateUrl: './ak-chapter-name.component.html',
  styleUrls: ['./ak-chapter-name.component.scss']
})
export class AkChapterNameComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public shabads_info: any;
  public chapter_id: number;
  public chapter_name: string;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.shabads_info = {shabads: []};
    this.route.params.subscribe(p=>{
      if(p){
        this.chapter_id = p.chapter_no;
        this.chapter_name = p.chapter_name;

      }
    })
    this.searchService.ak_chapter_name(this.chapter_id, this.chapter_name).subscribe(res=>{
      if(res) {
        this.shabads_info = res;
        this.titleService.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      }
    })
  }

  format_shabad_name(name: string) {
    return name.replace(/ /g, '-');
  }

}
