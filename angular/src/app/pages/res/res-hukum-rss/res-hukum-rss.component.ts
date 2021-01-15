import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-res-hukum-rss',
  templateUrl: './res-hukum-rss.component.html',
  styleUrls: ['./res-hukum-rss.component.scss']
})
export class ResHukumRssComponent implements OnInit {
  public page_info: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.page_info = {
      posts: [],
    };

    this.searchService.getHukumRss().subscribe(res=>{
      console.log(res);
      this.page_info = res;
    })
  }

}
