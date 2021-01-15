import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.scss']
})
export class HindiComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public chapters: any[];
  public chars: any[];
  public current_alpha: string;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Amrit Keertan Gutka Alphabetical Shabad Index in Hindi  :- SearchGurbani.com");

    this.meta.updateTag({name: 'Description', content: 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in Hindi  at SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in Hindi  at SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Amrit Keertan Gutka Alphabetical Shabad Index in Hindi  :- SearchGurbani.com'})
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.current_alpha = '';
    this.chapters = [];
    this.chars = [
      'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'ञ', 'ट', 'ठ', 'ड',
      'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'ऩ', 'प', 'फ', 'ब', 'भ', 'म',
      'य', 'ल', 'व', 'श', 'ष', 'स', 'ह'
    ];

    this.route.queryParams.subscribe(p=> {
      if(p) {
        this.current_alpha = p.alpha;
      }
      this.get_chapters();
    })
  }

  get_chapters () {
    this.searchService.ak_hindi_index(this.current_alpha).subscribe(res=>{
      if(res) {
        this.chapters = res.shabads;
      }
    })
  }

  reload(alpha) {
    this.current_alpha=alpha;
    this.get_chapters();
  }

}
