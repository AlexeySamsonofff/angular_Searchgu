import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { ReCaptchaV3Service, OnExecuteData } from 'ng-recaptcha';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  isButtonEnable: boolean;

  name: string;
  emailid: string;
  subject: string;
  message: string;
  send_copy: string;

  constructor(private titleService: Title, private meta: Meta, private searchService: SearchService, private recaptchaV3Service: ReCaptchaV3Service){}

  ngOnInit() {
    this.meta.updateTag({name: 'Description', content: 'Feedback Form : SearchGurbani.com'});
    this.meta.updateTag({property: 'og:description', content: 'Feedback Form : SearchGurbani.com'});
    this.meta.updateTag({name: 'Keywords', content: 'Gurbaanee Keertan,Gurmat Sangeet, Gurbani Kirtan,Amrit Keertan, Gurbani, Shabad Keertan,  Dasam Granth, Guru granth, granth, kabit, Bhai Gurdas, Vaaran, Varan, Mahankosh, Kosh, Hukumnama, Baanis, Japji, jaap, Sukhmani, Ardaas'});
    this.meta.updateTag({property: 'og:title', content: 'Feedback Form : SearchGurbani.com'});
    this.meta.updateTag({property: 'og:url', content: location.href});
    this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})

    this.titleService.setTitle("Feedback Form : SearchGurbani.com");
    this.isButtonEnable = true;

    this.name = this.emailid = this.subject = this.message = "";
    this.send_copy = 'yes';
  }

  resolved(captchaResponse: string) {
    this.isButtonEnable = true;
  }

  send_feedback() {
    this.recaptchaV3Service.onExecute.subscribe((data: OnExecuteData)=>{
        this.searchService.send_feedback(this.name, this.emailid, this.subject, this.message, this.send_copy).subscribe(res=>{

        })
    })
  }

}
