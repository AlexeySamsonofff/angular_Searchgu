import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-res-hukumnama-ang',
  templateUrl: './res-hukumnama-ang.component.html',
  styleUrls: ['./res-hukumnama-ang.component.scss']
})
export class ResHukumnamaAngComponent implements OnInit {
  @ViewChild('audio', {static: false}) audio: ElementRef<HTMLAudioElement>;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b"
  public page_info: any;
  public ang_no: string;
  public data: any;

  public audiodata: any;
  public audioObj: any;
  public totalAudioTime: number;
  public curAudioTime: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private ts: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.page_info = {lines: []};
    this.data = {
      "punjabi": "",
      "translit": "",
      "english": "",
      "ss_para": "",
    }
    this.route.params.subscribe(p=>{
      this.ang_no = p.ang;
      this.downloadAudio();
      this.get_pageinfo();
    });
  }

  get_pageinfo(){
    this.searchService.hukumnama_ang(this.ang_no, 'pageno').subscribe(res=>{
      if(res){
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
        this.page_info = res;
        this.page_info.lines.forEach(element => {
          this.data['punjabi'] += (element.punjabi != "" ? element.punjabi + "<br />" : "");
          this.data['translit'] += (element.translit != "" ? element.translit + "<br />" : "");
          this.data['english'] += (element.english != "" ? element.english + "<br />" : "");
          this.data['ss_para'] += element.ss_para;
        });
      }
    });
  }

  downloadAudio() {
    this.searchService.downloadAudio('hukum/'+this.ang_no).subscribe(res=>{
      if(this.audio) {
        this.audio.nativeElement.src = "data:audio/mpeg;base64," + res.data;
      }
    })
  }
}
