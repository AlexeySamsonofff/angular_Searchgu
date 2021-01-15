import { Component, OnInit } from '@angular/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  page: number;
  pageInfo: any;

  constructor(private titleService: Title, private meta: Meta,
    private searchService: SearchService, private sanitizer: DomSanitizer){}

  ngOnInit() {
    this.page = 0;
    this.pageInfo = {comments: []};
    this.meta.updateTag({name: 'Description', content: 'Guestbook -SearchGurbani.com'});
    this.meta.updateTag({name: 'og:description', content: 'Guestbook -SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'});
    this.meta.updateTag({name: 'og:title', content: 'Guestbook:SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.titleService.setTitle("Guestbook:SearchGurbani.com");

    this.getPageInfo();
  }

  getPageInfo() {
    this.searchService.guestbook(this.page).subscribe(res=>{
      this.pageInfo = res;
      this.updateMessage();
    })
  }

  pageChanged(evt: any) {
    this.getPageInfo();
  }

  updateMessage(){
    for(let i = 0; i<this.pageInfo.comments.length; i++) {
      this.pageInfo.comments[i].message =
      this.pageInfo.comments[i].message.replace(/ http/g, 'http');
    }
  }

}
