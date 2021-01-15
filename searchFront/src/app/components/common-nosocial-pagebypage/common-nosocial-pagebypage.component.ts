import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { hexToRgbA } from 'src/app/global/utility';

@Component({
  selector: 'app-common-nosocial-pagebypage',
  templateUrl: './common-nosocial-pagebypage.component.html',
  styleUrls: ['./common-nosocial-pagebypage.component.scss']
})
export class CommonNosocialPagebypageComponent implements OnInit {
  @ViewChild('audio', {static: false}) audio : ElementRef<HTMLAudioElement>
  @Input() page_info: any;
  @Input() max_page: number;
  @Input() footerColor: string;
  @Input() title: string;
  @Input() no_audio: boolean;
  @Output() goPage = new EventEmitter<number>();
  public pageName: string;
  public cur_page:number;

  font: any;
  activeBg: string;
  showFont: boolean;
  showTranslit: boolean;
  showHindi: boolean;
  showEnglish: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.activeBg = hexToRgbA(this.footerColor, 0.8);
    this.showFont = false;
    this.showTranslit = false;
    this.showHindi = false;
    this.showEnglish = false;

    let font_baanis_str = localStorage.getItem('font-baanis');
    let lang_baanis_str = localStorage.getItem('baanis-langs');
    if(font_baanis_str) {
      this.font = JSON.parse(font_baanis_str);
    }else{
      this.font = this.resetFonts();
    }

    if(lang_baanis_str) {
      let langOpt = JSON.parse(lang_baanis_str);
      this.showTranslit = langOpt.showTranslit;
      this.showHindi = langOpt.showHindi;
      this.showEnglish = langOpt.showEnglish;
    }

    this.cur_page = 1;
    this.gotoPage();
  }

  resetFonts() {
    let font = {
      gurmukhi: { // transliateration gurmukhi (punjabi) || punctuation || Lareevar
        name: 'AnmolUniBani',
        color: '#333333',
        size: 20
      },
      phonetic: { // transliteration phonetic (roman) and english
        name: 'arial',
        color: '#06035b',
        size: 16
      },
      hindi: {
        name: 'arial',
        color: '#880808',
        size: 16
      },
      english: {
        name: 'arial',
        color: '#366732',
        size: 16,
      }
    };
    return font;
  }

  resetFont(name) {
    this.font[name] = this.resetFonts()[name];
    this.savePreference();
  }

  gotoPage() {
    this.goPage.emit(this.cur_page);
    this.getPageName();
    if(this.cur_page === 1) {
      this.downloadAudio();
    }
  }

  getPageName() {
    let urls = location.href.split('/');
    let page_name = urls[urls.length - 1];
    this.pageName = page_name.replace(/-/g, '_');
  }

  downloadAudio() {
    let path = "baanis/" + this.pageName;
    this.searchService.downloadAudio(path).subscribe(res=>{
      if(res.status && this.audio) {
        this.audio.nativeElement.src = "data:audio/mpeg;base64," + res.data;
      }
    })
  }

  goNext() {
    this.cur_page = parseInt(this.cur_page.toString()) + 1;
    this.gotoPage();
    window.scroll(0, 0);
  }

  goBegin() {
    this.cur_page = 1;
    this.gotoPage();
    window.scroll(0, 0);
  }

  goBack() {
    this.cur_page = parseInt(this.cur_page.toString()) - 1;
    this.gotoPage();
    window.scroll(0, 0);
  }

  goLast() {
    this.cur_page = this.max_page;
    this.gotoPage();
    window.scroll(0, 0);
  }

  savePreference() {
    localStorage.setItem('font-baanis', JSON.stringify(this.font));
    localStorage.setItem('baanis-langs', JSON.stringify({
      showTranslit: this.showTranslit,
      showHindi: this.showHindi,
      showEnglish: this.showEnglish
    }));
  }

  print() {
    window.print();
  }
}
