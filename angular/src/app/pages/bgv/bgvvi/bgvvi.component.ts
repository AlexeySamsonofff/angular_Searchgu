import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bgvvi',
  templateUrl: './bgvvi.component.html',
  styleUrls: ['./bgvvi.component.scss']
})
export class BGVviComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/BGVBack.jpg)";
  param: Array<string> = ['bgv'];
  footerColor = "#4f022c"
  public chapters: any[];
  public chars: any[];
  public current_alpha: number;
  constructor(private searchService: SearchService, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.current_alpha = 1;
    this.chapters = [];
    this.chars = [];
    this.titleService.setTitle("Bhai Gurdas Vaaran - Vaar Index -ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ :- SearchGurbani.com");
    this.meta.updateTag({name: 'Description', content: 'Bhai Gurdas Vaaran - Vaar Index  :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content:'Bhai Gurdas Vaaran - Vaar Index  :- SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan'});
    this.meta.updateTag({property: 'og:title', content: 'Bhai Gurdas Vaaran - Vaar Index -ਵਾਰਾਂ ਭਾਈ ਗੁਰਦਾਸ :- SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
    for (let i = 0; i < 40; i++) {
      this.chars.push(i + 1);
    }
    this.route.params.subscribe(p => {
      if (p) {
        this.current_alpha = p.vaar_no;
      }
      if (!this.current_alpha) {
        this.current_alpha = 1;
      }
      this.get_chapters();
    })
  }

  get_chapters() {
    this.searchService.bgv_vaar_index(this.current_alpha).subscribe(res => {
      if (res) {
        this.chapters = [];
        let p = 0;
        let pauries = res.pauries;
        for (let i = 0; i < pauries.length; i++) {
          if (pauries[i].pauri_lineID == 0) continue;
          if (pauries[i].paurino == p) continue;
          this.chapters.push(pauries[i]);
          p = pauries[i].paurino;
        }
      }
    })
  }

  reload(alpha) {
    this.current_alpha = alpha;
    this.get_chapters();
  }
}
