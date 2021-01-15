import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ggs-author-name',
  templateUrl: './ggs-author-name.component.html',
  styleUrls: ['./ggs-author-name.component.scss']
})
export class GgsAuthorNameComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile14.jpg)";
  param:Array<string> = ['ggs'];
  footerColor = "#2f4203";
  public raags_info: any;
  public author_name: string;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title,private meta: Meta) { }

  ngOnInit() {
    this.raags_info = { raags: [] };
    this.route.params.subscribe(p=>{
      this.author_name = p.author_name;
      this.get_raags();
    })
  }

  get_raags() {
    this.searchService.get_author_byname(this.author_name).subscribe(res=>{
      if(res) {
        this.titleService.setTitle(res.meta_title);
        this.raags_info = res;
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      }
    })
  }

  format_author_name() {
    let author_name = this.raags_info.author;
    if(!author_name){
      return '';
    }
    return author_name.replace(/-/g, ' ');
  }

}
