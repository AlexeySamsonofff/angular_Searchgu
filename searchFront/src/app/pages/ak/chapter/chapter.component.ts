import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public chapters: any[];
  constructor(private searchService: SearchService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.chapters = [];
    this.titleService.setTitle("Amrit Keertan Gutka Chapter Index  :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Explore Amrit Keertan Gutka Chapter Index  at  SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Explore Amrit Keertan Gutka Chapter Index  at  SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Amrit Keertan Gutka Chapter Index  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.searchService.ak_chapter_index().subscribe(res=>{
      if(res) {
        this.chapters = res.chapters;
      }
    })
  }

  formatName(name: string) {
    return name.replace(/ /g, '-').toLowerCase();
  }
}
