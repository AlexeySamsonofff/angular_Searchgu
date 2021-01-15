import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hexToRgbA } from 'src/app/global/utility';

@Component({
  selector: 'app-common-verse-print',
  templateUrl: './common-verse-print.component.html',
  styleUrls: ['./common-verse-print.component.scss']
})
export class CommonVersePrintComponent implements OnInit {
  @Input() page_info: any;
  @Input() max_page: number;
  @Input() footerColor: string;
  @Input() title: string;
  @Input() first_page: number;
  @Input() cur_page: number;
  @Input() vaar_no: number;
  @Input() important_field: string;
  @Input() no_audio: boolean;
  @Input() offset: number;
  @Output() goPage = new EventEmitter<number>();

  public pageType: string;
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";

  public off: number;
  showDisplay: boolean;
  showFont: boolean;
  showPunc: boolean; // should be saved in localstorage
  showGurmukhi: boolean; // should be saved in localstorage

  activeBg: string;
  staticPreference: any;

  lareevar_assist_id: number;
  defaultFont = {
    gurmukhi: {
      name: 'AnmolUniBani',
      color: '#333333',
      size: 20,
    },
    english: {
      name: 'arial',
      color: '#366732',
      size: 20,
    },
    hindi: {
      name: 'arial',
      color: '#880808',
      size: 20,
    },
    phonetic: {
      name: 'arial',
      color: '#06035b',
      size: 20,
    }
  };

  defaultFont_dark = {
    gurmukhi: {
      name: 'AnmolUniBani',
      color: '#da5a5a',
      size: 20,
    },
    english: {
      name: 'arial',
      color: '#fff8e8',
      size: 20,
    },
    hindi: {
      name: 'arial',
      color: '#606983',
      size: 20,
    },
    phonetic: {
      name: 'arial',
      color: '#6cc04b',
      size: 20,
    }
  }

  transliteration: {
    roman: boolean,
    english: boolean,
    hindi: boolean,
    shahmukhi: boolean,
    punjabi: boolean,
    punctuation: boolean,
    punctuation_assist: boolean,
    lareevar: boolean,
    lareevar_assist: boolean
  };
  translation: {
    ggs: {
      english: boolean,
      eng_mms: boolean,
      punj_mms: boolean,
      ggd: boolean,
      ft: boolean,
      fth: boolean,
      ss: boolean,
    },
    ak: {
      english: boolean,
    },
    bgv: {
      english: boolean,
      teeka: boolean,
      teeka_roman: boolean,
      teeka_hindi: boolean,
    },
    dg: {
      english: boolean,
      teeka: boolean,
    },
    ks: {
      english: boolean,
      teeka: boolean,
      teeka_roman: boolean,
      teeka_hindi: boolean,
    },
    bnl: {
      english: boolean,
      teeka: boolean,
      teekahindi: boolean,
    }
  };
  displayMode: {
    split_view: boolean,
    dark_mode: boolean,
    center_align: boolean,
  };
  font: {
    gurmukhi: { // transliateration gurmukhi (punjabi) || punctuation || Lareevar
      name: string,
      color: string,
      size: number
    },
    phonetic: { // transliteration phonetic (roman) and english
      name: string,
      color: string,
      size: number
    },
    hindi: {
      name: string,
      color: string,
      size: number
    },
    english: {
      name: string,
      color: string,
      size: number,
    }
  };
  // public cur_page: string;

  constructor() { }

  ngOnInit() {
    this.pageType = '';
    this.off = this.offset || 0;
    let url = location.href;
    if (url.indexOf('/ang') > -1) {
      this.pageType = 'ang';
    }
    if (url.indexOf('/page') > -1) {
      this.pageType = 'page';
    }
    if (url.indexOf('/verse') > -1) {
      this.pageType = 'verse';
    }
    if (url.indexOf('/shabad') > -1) {
      this.pageType = 'shabad';
    }
    if (url.indexOf('/bhai-nand-lal') > -1) {
      this.pageType = 'bnl';
    }
    if (url.indexOf('dasam-granth') > -1) {
      this.pageType = 'dg';
    }
    this.activeBg = hexToRgbA(this.footerColor, 0.6);

    if (!this.first_page) {
      this.first_page = 1;
    }
    if (!this.cur_page) {
      this.cur_page = this.first_page;
    }

    this.showDisplay = this.showFont = this.showPunc = this.showGurmukhi;

    let savedPreference = localStorage.getItem('preference');
    let staticPreference = localStorage.getItem('preference_static');
    if (staticPreference) {
      this.staticPreference = JSON.parse(staticPreference);
    }

    if (savedPreference) {
      let preferenceObj = JSON.parse(savedPreference);
      this.transliteration = preferenceObj.transliteration;
      this.translation = preferenceObj.translation;
      this.displayMode = preferenceObj.displayMode;
      this.font = preferenceObj.font;

      this.social_flag = preferenceObj.social_flag;
      if(this.social_flag) {
        this.social_string = "Social Sharing Off";
      }
      else {
        this.social_string = "Social Sharing On";
      }

      if (!this.transliteration) {
        this.resetDisplay();
      }
      if (!this.font) {
        this.font = this.defaultFont;
      }
      if (!this.font.gurmukhi) {
        this.resetFont('gurmukhi');
      }

      if (!this.font.english) {
        this.resetFont('english');
      }

      if (!this.font.hindi) {
        this.resetFont('hindi');
      }

      if (!this.font.phonetic) {
        this.resetFont('phonetic');
      }
    } else {
      this.resetDisplay();
      this.font = this.defaultFont;
    }

    this.lareevar_assist_id = Math.floor(Math.random() * 5 % 5 + 1);
  }

  resetDisplay() {
    this.transliteration = {
      roman: true,
      english: false,
      hindi: false,
      shahmukhi: false,
      punjabi: true,
      punctuation: false,
      punctuation_assist: false,
      lareevar: false,
      lareevar_assist: false
    }

    this.translation = {
      ggs: {
        english: true,
        eng_mms: false,
        punj_mms: false,
        ggd: false,
        ft: false,
        fth: false,
        ss: false,
      },
      ak: {
        english: true,
      },
      bgv: {
        english: true,
        teeka: false,
        teeka_roman: false,
        teeka_hindi: false,
      },
      dg: {
        english: true,
        teeka: false,
      },
      ks: {
        english: true,
        teeka: false,
        teeka_roman: false,
        teeka_hindi: false,
      },
      bnl: {
        english: true,
        teeka: false,
        teekahindi: false,
      }
    }

    this.displayMode = {
      split_view: false,
      dark_mode: false,
      center_align: false
    }
    this.font = this.defaultFont;
  }

  resetFont(name) {
    if (this.displayMode.dark_mode) {

      this.font[name] = {
        name: name==='gurmukhi'?'AnmolUniBani':'arial',
        color: '#ffffff',
        size: 20
      }
    } else {
      this.font[name] = this.defaultFont[name];
    }
  }

  gotoPage() {
    this.goPage.emit(this.cur_page);
  }

  goNext() {
    this.cur_page = parseInt(this.cur_page.toString()) + 1;
    this.gotoPage();
  }

  goBegin() {
    this.cur_page = this.first_page;
    this.gotoPage();
  }

  goBack() {
    this.cur_page = parseInt(this.cur_page.toString()) - 1;
    this.gotoPage();
  }

  goLast() {
    this.cur_page = this.max_page;
    this.gotoPage();
  }

  // convert blank space to dash and all upper case to lowercase
  formatName(name) {
    return name.replace(/ /g, '-').toLowerCase();
  }

  getLabel() {
    switch (this.page_info.scripture) {
      case "ak": return "Page";
      case "dg": return "Page";
      case "ks": return "Kabit";
      case "bgv": return "Pauri";
      default: return "Ang";
    }
  }

  removeSpace(str: string) {
    let newContent = this.display(str).trim();

    return newContent.replace(/ /g, '');
  }

  display(content: string) { // insert <span> tag
    let lines = content.split('\n');
    let newLines = [];
    let newWords = [];
    let newLine;
    for (let i = 0; i < lines.length; i++) {
      let words = lines[i].split(' ');
      newWords = [];
      for (let j = 0; j < words.length; j++) {
        if (j < words.length - 1) {
          if (words[j + 1] === ',') {
            newWords.push(`<small>${words[j]}</small>`);
          } else if (words[j + 1] === ';') {
            newWords.push(`<strong>${words[j]}</strong>`);
          } else {
            let len = words[j].length;
            let lastChar = words[j].substr(len - 1);
            if (lastChar === ',') {
              newWords.push(`<small>${words[j].substr(0, len - 1)}</small><i>,</i>`);
            }
            else if (lastChar === ';') {
              newWords.push(`<strong>${words[j].substr(0, len - 1)}</strong><i>;</i>`);
            }else{
              newWords.push(`<span>${words[j]}</span>`);
            }
          }
        } else {
          let len = words[j].length;
          let lastChar = words[j].substr(len - 1);
          if (lastChar === ',') {
            newWords.push(`<small>${words[j].substr(0, len - 1)}</small><i>,</i>`);
          }else if (lastChar === ';') {
            newWords.push(`<strong>${words[j].substr(0, len - 1)}</strong><i>;</i>`);
          }else{
            newWords.push(`<span>${words[j]}</span>`);
          }
        }
      }
      newLine = newWords.join(' ');
      newLines.push(newLine);
    }
    return newLines.join('\n').trim();
  }

  print() {
    window.print();
  }
}
