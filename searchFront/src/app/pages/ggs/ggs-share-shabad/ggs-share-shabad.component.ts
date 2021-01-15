import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ggs-share-shabad',
  templateUrl: './ggs-share-shabad.component.html',
  styleUrls: ['./ggs-share-shabad.component.scss']
})
export class GgsShareShabadComponent implements OnInit {
  public backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  public param:Array<string> = ['ggs'];
  public footerColor = "#2f4203";

  public lineno: number;
  public shabad_id: number;
  public page_info: any;

  constructor(private searchService: SearchService,
    private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.route.params.subscribe(p=>{
      this.shabad_id = p.shabad_id;
      this.lineno = p.lineno;
      this.gotoPage();
    })
  }

  gotoPage(){
      this.searchService.get_shared_ggs('shabad', this.shabad_id, this.lineno).subscribe(res=>{
        this.page_info = res;
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
        this.titleService.setTitle(res.meta_title);
      })
  }
}
