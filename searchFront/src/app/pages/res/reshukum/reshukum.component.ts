import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reshukum',
  templateUrl: './reshukum.component.html',
  styleUrls: ['./reshukum.component.scss']
})
export class ReshukumComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param: Array<string> = ['home'];
  footerColor = "#7b0400";
  public hukum_date: Date;
  public hukumdata: any;
  public today: Date;

  public hukum_audio: string;
  public hukum_katha: string;

  @ViewChild("datepicker", { static: false }) datepicker: ElementRef;
  @ViewChild("audio1", { static: false }) audio1: ElementRef<HTMLAudioElement>;
  @ViewChild("audio2", { static: false }) audio2: ElementRef<HTMLAudioElement>;

  constructor(private ts: Title, private searchService: SearchService, private meta: Meta,
    private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.today = new Date();
    this.route.queryParams.subscribe(p=>{
      if(p && p.dt) {
        this.hukum_date = new Date(p.dt + ' 23:59:59');
      }else{
        this.hukum_date = new Date();
      }
      let dd = this.formatDateYYYYMMDD(this.hukum_date);
      this.getAudioUrls(this.hukum_date);
      this.getData(dd);
    })
  }

  handleChangeDate(val: Date) {
    let dd = new Date(val);
    let d = this.formatDateYYYYMMDD(dd);
    this.getAudioUrls(val);
    this.getData(d);
    let curUrl = window.location.pathname;
    if(!this.checkIsSameDate(val, this.today)) {
      curUrl = curUrl + '?dt=' + d;
    }

    this.location.replaceState(curUrl);
  }

  getAudioUrls(date: Date) {
    if(this.audio1 && this.audio2) {
      this.audio1.nativeElement.pause();
      this.audio2.nativeElement.pause();
      this.audio1.nativeElement.currentTime = 0;
      this.audio2.nativeElement.currentTime = 0;
      let ddmmyy = this.getDDMMYY(date);
      this.hukum_audio = `http://old.sgpc.net/audio/SGPCNET${ddmmyy}.mp3`;
      this.hukum_katha = `http://old.sgpc.net/katha/katha${ddmmyy}.mp3`;
      this.audio1.nativeElement.src = this.hukum_audio;
      this.audio2.nativeElement.src = this.hukum_katha;
    }
  }

  getDDMMYY(d: Date) {
    let y = d.getFullYear();
    let leny = y.toString().length;
    let yy = y.toString().substr(leny - 2, 2);

    let m = d.getMonth() + 1;
    let d1 = d.getDate();

    let mm = m < 10 ? "0" + m : "" + m;
    let dd = d1 < 10 ? "0" + d1 : "" + d1;
    return dd.toString() + mm.toString() + yy;
  }

  checkIsSameDate(d1: Date, d2: Date) {
    let y1 = d1.getFullYear();
    let y2 = d2.getFullYear();
    if(y1 !== y2) {
      return false;
    }
    let m1 = d1.getMonth();
    let m2 = d2.getMonth();
    if(m1 !== m2) {
      return false;
    }
    let date1 = d1.getDate();
    let date2 = d2.getDate();
    if(date1 !== date2) {
      return false;
    }
    return true;
  }

  showDatepicker() {
    this.datepicker.nativeElement.click();
  }

  formatDateYYYYMMDD(d: Date) {
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let d1 = d.getDate();

    let mm = m < 10 ? "0" + m : "" + m;
    let dd = d1 < 10 ? "0" + d1 : "" + d1;
    return y + "-" + mm + "-" + dd;
  }

  getData(d) {
    this.searchService.hukum(d).subscribe(res => {
      this.hukumdata = res;
      this.ts.setTitle(res.og_title);
      this.meta.updateTag({ name: 'Description', content: res.meta_description });
      this.meta.updateTag({ property: 'og:description', content: res.og_description });
      this.meta.updateTag({ name: 'Keywords', content: res.meta_keywords });
      this.meta.updateTag({ property: 'og:title', content: res.og_title });
      this.meta.updateTag({ property: 'og:url', content: res.og_url });
      this.meta.updateTag({ property: 'og:image', content: "/assets/img/share_scripture.png" });

      this.getAudioUrls(this.hukum_date);
    });
  }
}
