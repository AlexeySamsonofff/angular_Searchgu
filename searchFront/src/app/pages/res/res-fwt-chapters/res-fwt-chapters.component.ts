import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-res-fwt-chapters',
  templateUrl: './res-fwt-chapters.component.html',
  styleUrls: ['./res-fwt-chapters.component.scss']
})
export class ResFwtChaptersComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359";
  chapterInfo: any;
  volume_id: number;
  volume_name: string;

  constructor(private route: ActivatedRoute, private ts: Title, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.chapterInfo = {chapters: []};
    this.route.params.subscribe(p=>{
      this.volume_id = p.volume_id || 0;
      this.volume_name = p.volume_name || '';
      this.searchService.fwt_chapters(this.volume_id).subscribe(res=>{

        this.chapterInfo = res;
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      })
    })
  }

}
