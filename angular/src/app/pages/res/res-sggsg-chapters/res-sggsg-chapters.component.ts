import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-res-sggsg-chapters',
  templateUrl: './res-sggsg-chapters.component.html',
  styleUrls: ['./res-sggsg-chapters.component.scss']
})
export class ResSggsgChaptersComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";
  chapterInfo: any;
  volume_id: number;
  volume_name: string;

  constructor(private ts: Title, private searchService: SearchService, private route: ActivatedRoute, private meta: Meta) { }

  ngOnInit() {

    this.chapterInfo = {chapters: []};
    this.route.params.subscribe(p=>{
      this.volume_id = p.volume_id || 1;
      this.volume_name = p.volume_name || '';
      this.searchService.sgpsg_chapters(this.volume_id).subscribe(res=>{

        this.chapterInfo = res;
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
      })
    })

  }
}
