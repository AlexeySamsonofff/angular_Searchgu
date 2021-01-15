import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { ReCaptchaV3Service, OnExecuteData } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guestbook-post',
  templateUrl: './guestbook-post.component.html',
  styleUrls: ['./guestbook-post.component.scss']
})
export class GuestbookPostComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";

  name: string;
  email: string;
  message: string;
  isButtonEnable: boolean;

  subscription: Subscription;

  constructor(private titleService: Title, private meta: Meta,
    private searchService: SearchService, private recaptchaV3Service: ReCaptchaV3Service){}

  ngOnInit() {
    this.meta.updateTag({name: 'Description', content: 'Guestbook -SearchGurbani.com'});
    this.meta.updateTag({name: 'og:description', content: 'Guestbook -SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurmat Sangeet, Gurubani ,Kirtan,Amrit,Gurbani, Shabad, Keertan, English ,translation ,Phonetic, Transliteration, Hindi ,Sikh scriptures,sikhism, sikh, mahan kosh,hukamnama, dasam granth,granth,gurdas,guru,raag, vaaran,varan,kabit,nand lal,ang,gurdwara,hukumnama,bhagats;'});
    this.meta.updateTag({name: 'og:title', content: 'Guestbook:SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});

    this.titleService.setTitle("Guestbook:SearchGurbani.com");
    this.isButtonEnable = true; // should be false later
    this.name = this.email = this.message = "";

  }

  saveNewGuestbook() {
    this.recaptchaV3Service.execute("homepage").subscribe((token)=>{
      if(token) {
        this.searchService.save_guestbook(this.name, this.email, this.message).subscribe(res=>{
        })
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  resolved(captchaResponse: string) {
    this.isButtonEnable = true;
  }
}
