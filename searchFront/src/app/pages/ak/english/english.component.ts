import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { formatName } from 'src/app/global/utility';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359"
  public chapters: any[];
  public chars: any[];
  public current_alpha: string;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.current_alpha = '';
    this.chapters = [];
    this.chars = [];
    this.titleService.setTitle("Amrit Keertan Gutka Alphabetical Shabad Index in English  :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in English at SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Explore Amrit Keertan Gutka Alphabetical Shabad Index in English at SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Amrit Keertan Gutka Alphabetical Shabad Index in English  :- SearchGurbani.com'})
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    for(let i = 65; i<91; i++) {
      this.chars.push(String.fromCharCode(i));
    }

    this.route.queryParams.subscribe(p=> {
      if(p) {
        this.current_alpha = p.alpha;
      }
      this.get_chapters();
    })
  }

  get_chapters () {
    this.searchService.ak_english_index(this.current_alpha).subscribe(res=>{
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
