import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { hexToRgbA } from 'src/app/global/utility';
import { ResraagThaatBilavalComponent } from 'src/app/pages/res/resraag-thaat-bilaval/resraag-thaat-bilaval.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-commonpagebypage',
  templateUrl: './commonpagebypage.component.html',
  styleUrls: ['./commonpagebypage.component.scss']
})
export class CommonpagebypageComponent implements OnInit {
  @ViewChild('audio', { static: false }) audio: ElementRef<HTMLAudioElement>;
  @Input() page_info: any;
  @Input() max_page: number;
  @Input() footerColor: string;
  @Input() title: string;
  @Input() first_page: number;
  @Input() cur_page: number;
  @Input() vaar_no: number;
  @Input() important_field: string;
  @Input() no_audio: boolean;
  @Output() goPage = new EventEmitter<number>();


  public pageType: string;
  public social_flag: boolean = false;
  public social_enable: any;

  public social_string: string = "Social Sharing On";
  public shareText: string;

  showDisplay: boolean;
  showFont: boolean;
  showPunc: boolean; // should be saved in localstorage
  showGurmukhi: boolean; // should be saved in localstorage

  activeBg: string;
  staticPreference: any;

  lareevar_assist_id: number;

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
  public audio_type: string;
  // public cur_page: string;

  constructor(private searchService: SearchService, private santizer: DomSanitizer) { }

  ngOnInit() {
    this.initShareText();
    this.activeBg = hexToRgbA(this.footerColor, 0.6);

    if (!this.first_page) {
      this.first_page = 1;
    }
    // =========== first_page should be 1 always
    // this.first_page = 1;
    if (!this.cur_page) {
      this.cur_page = this.first_page;
    }

    this.pageType = '';
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
    if (url.indexOf('guru-granth-sahib') > -1) {
      this.pageType = 'ggs';
      this.downloadAudio();
    }

    this.showDisplay = this.showFont = this.showPunc = this.showGurmukhi;

    let savedPreference = localStorage.getItem('preference');
    let staticPreference = localStorage.getItem('preference_static');
    this.social_enable = true;
    if (staticPreference) {
      this.staticPreference = JSON.parse(staticPreference);
      this.social_enable = JSON.parse(staticPreference).allow_share_lines;
    }

    if (savedPreference) {
      let preferenceObj = JSON.parse(savedPreference);
      this.transliteration = preferenceObj.transliteration;
      this.translation = preferenceObj.translation;
      this.displayMode = preferenceObj.displayMode;
      this.font = preferenceObj.font;

      this.social_flag = preferenceObj.social_flag;
      if (this.social_flag) {
        this.social_string = "Social Sharing Off";
      }
      else {
        this.social_string = "Social Sharing On";
      }

      if (!this.transliteration) {
        this.resetDisplay();
      }
      if (!this.font) {
        this.font = this.getDefaultFont();
        this.savePreference();
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
      this.font = this.getDefaultFont();
      this.savePreference();
    }
    this.lareevar_assist_id = Math.floor(Math.random() * 5 % 5 + 1);
  }

  getDefaultFont() {
    let font = {
      gurmukhi: {
        name: 'AnmolUniBani',
        color: '#333333',
        size: 20,
      },
      english: {
        name: 'arial',
        color: '#366732',
        size: 14,
      },
      hindi: {
        name: 'arial',
        color: '#880808',
        size: 14,
      },
      phonetic: {
        name: 'arial',
        color: '#06035b',
        size: 14,
      }
    };
    return font;
  }

  getDefaultFont_dark() {
    let font = {
      gurmukhi: {
        name: 'AnmolUniBani',
        color: '#da5a5a',
        size: 20,
      },
      english: {
        name: 'arial',
        color: '#fff8e8',
        size: 14,
      },
      hindi: {
        name: 'arial',
        color: '#606983',
        size: 14,
      },
      phonetic: {
        name: 'arial',
        color: '#6cc04b',
        size: 14,
      }
    }
    return font;
  }

  downloadAudio() {
    // clear audio
    if (this.audio) {
      this.audio.nativeElement.src = '';
    }
    let audiolink = '';
    let prefObj = localStorage.getItem('preference_static');
    this.audio_type = 'gms';
    if (prefObj) {
      let obj = JSON.parse(prefObj);
      this.audio_type = obj.ggs_audio;
    }
    audiolink = 'sggs-' + this.audio_type + '/' + this.audio_type + '-' + this.cur_page;
    this.searchService.downloadAudio(audiolink).subscribe(res => {
      if (res.status && this.audio) {
        this.audio.nativeElement.src = "data:audio/mpeg;base64," + res.data;
      }
    })
  }

  setAudio(type) {
    if (this.audio) {
      this.audio.nativeElement.pause();
      this.audio.nativeElement.src = "";
    }
    this.audio_type = type;
    let audiolink = 'sggs-' + this.audio_type + '/' + this.audio_type + '-' + this.cur_page;
    this.searchService.downloadAudio(audiolink).subscribe(res => {
      if (res.status && this.audio) {
        this.audio.nativeElement.src = "data:audio/mpeg;base64," + res.data;
      }
    })
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

    this.font = this.getDefaultFont();

    this.savePreference();
  }

  resetFont(name) {
    if (this.displayMode.dark_mode) {

      this.font[name] = {
        name: name === 'gurmukhi' ? 'AnmolUniBani' : 'arial',
        color: '#ffffff',
        size: 20
      }
    } else {
      this.font[name] = this.getDefaultFont()[name];
    }
    this.savePreference();
  }

  gotoPage() {
    this.goPage.emit(this.cur_page);
    this.downloadAudio();
    window.scroll(0, 0);
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

  changeSocialView() {
    if (this.social_flag) {
      this.social_flag = false;
      this.social_string = "Social Sharing On";
    }
    else {
      this.social_flag = true;
      this.social_string = "Social Sharing Off";
    }
    this.savePreference();
  }

  // convert blank space to dash and all upper case to lowercase
  formatName(name) {
    return name.replace(/ /g, '-').toLowerCase();
  }

  getLabel() {
    if (this.pageType === 'bnl') {
      return 'Page';
    }
    switch (this.page_info.scripture) {
      case "ak": return "Page";
      case "dg": return "Page";
      case "ks": return "Kabit";
      case "bgv": return "Pauri";
      default: return "Ang";
    }
  }

  savePreference() {
    let preference = {
      transliteration: this.transliteration,
      translation: this.translation,
      displayMode: this.displayMode,
      showPunc: this.showPunc,
      showGurmukhi: this.showGurmukhi,
      font: this.font,
      social_flag: this.social_flag
    };
    let saved_static_pref = localStorage.getItem('preference_static');
    let preference_static;
    if (!saved_static_pref) {
      preference_static = {

        translation: {
          ggs: {
            eng_mms: false,
            punj_mms: false,
            ggd: false,
            ft: false,
            fth: false,
            ss: false,
          },
          bgv: {
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
          },
          dg: {
            teeka: false,
          },
          ks: {
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
          },
          bnl: {
            teeka: false,
            teekahindi: false,
          },
          english: true,
        },
        transliteration: {
          roman: true,
          english: false,
          hindi: false,
          shahmukhi: false,
          // punjabi: true,
          // punctuation: false,
          // lareevar: false,
          main_lang: 'punjabi'
        },
        displayMode: {
          split_view: 'line',
        },
        font: {
          gurmukhi: {
            name: 'arial',
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
        },
        mouseover_gurmukhi_dic: false,
        show_attributes: true,
        allow_share_lines: false,
        share: {
          translation: {
            english: false,
          },
          transliteration: {
            roman: false,
            english: false,
            hindi: false,
            shahmukhi: false
          }
        },
        ggs_audio: 'gms'
      }
    } else {
      preference_static = JSON.parse(saved_static_pref);
    }
    preference_static = {
      ...preference_static,
      translation: {
        ...this.translation,
        english: this.translation.ak.english || this.translation.bgv.english ||
          this.translation.bnl.english || this.translation.dg.english || this.translation.ggs.english || this.translation.ks.english
      },
      transliteration: {
        roman: this.transliteration.roman,
        english: this.transliteration.english,
        hindi: this.transliteration.hindi,
        shahmukhi: this.transliteration.shahmukhi,
        main_lang: this.transliteration.punctuation ? 'punctuation' : this.transliteration.lareevar ? 'lareevar' : 'punjabi',
      },
      font: this.font,
      displayMode: { split_view: this.displayMode.split_view ? 'page' : 'line' }
    }
    localStorage.setItem('preference', JSON.stringify(preference));
    localStorage.setItem('preference_static', JSON.stringify(preference_static));
  }

  print() {
    switch (this.page_info.scripture) {
      case "ak": {
        window.open(this.page_info.base_url + '/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
        break;
      }
      case "dg": {
        window.open(this.page_info.base_url + '/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
        break;
      }
      case "ks": {
        window.open(this.page_info.base_url + '/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
        break;
      }
      case "ggs": {
        window.open(this.page_info.base_url + '/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
        break;
      }
      case "bgv": {
        window.open(this.page_info.base_url + '/' + this.vaar_no + '/pauri/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
        break;
      }
      default:
        {
          if (this.page_info.base_url.indexOf('bhai-nand-lal') > -1) {
            window.open(this.page_info.base_url + '/' + this.cur_page + '/print-view', '_blank', 'height=700,width=700');
          }
          break;
        }
    }

  }

  removeSpace(str: string) {
    let newContent = this.makeHtml(str);
    return this.santizer.bypassSecurityTrustHtml(newContent.replace(/ /g, ''));
  }

  resetFontByDarkMode() {
    if (this.displayMode.dark_mode) {
      this.font = this.getDefaultFont_dark();
    } else {
      this.font = this.getDefaultFont();
    }
  }

  makeHtml(content: string) { // insert <span> tag
    let lines = content.split('\n');
    let newLines = [];
    let newWords = [];
    let newLine;
    let keywords = this.page_info.keywords;
    let mouseover = this.staticPreference ? this.staticPreference.mouseover_gurmukhi_dic : true;
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
            } else {
              if (!this.transliteration.punctuation && !this.transliteration.lareevar && keywords[words[j]] && mouseover) {
                newWords.push(`<span class="pointer" title="${keywords[words[j]]}"><a href="/sggs-kosh/do-search/${words[j]}">${words[j]}</a></span>`);
              } else {
                newWords.push(`<span>${words[j]}</span>`);
              }
            }
          }
        } else {
          let len = words[j].length;
          let lastChar = words[j].substr(len - 1);
          if (lastChar === ',') {
            newWords.push(`<small>${words[j].substr(0, len - 1)}</small><i>,</i>`);
          } else if (lastChar === ';') {
            newWords.push(`<strong>${words[j].substr(0, len - 1)}</strong><i>;</i>`);
          } else {
            if (!this.transliteration.punctuation && !this.transliteration.lareevar && keywords[words[j]] && mouseover) {
              newWords.push(`<span class="pointer" title="${keywords[words[j]]}"><a href="/sggs-kosh/do-search/${words[j]}">${words[j]}</a></span>`);
            } else {
              newWords.push(`<span>${words[j]}</span>`);
            }
          }
        }
      }
      newLine = newWords.join(' ');
      newLines.push(newLine);
    }
    return newLines.join('\n').trim();
  }

  display(content: string) {
    let html = this.makeHtml(content);
    return this.santizer.bypassSecurityTrustHtml(html);
  }

  goToSggsKosh(word) {
    alert(word);
  }

  toggle_punc() {
    this.transliteration.punctuation = !this.transliteration.punctuation;
    this.transliteration.punctuation_assist = this.transliteration.punctuation && this.transliteration.punctuation_assist;
    this.transliteration.lareevar = !this.transliteration.punctuation && this.transliteration.lareevar;
    this.transliteration.lareevar_assist = this.transliteration.lareevar && this.transliteration.lareevar_assist;
    this.savePreference()
  }

  toggle_lareevar() {
    this.transliteration.lareevar = !this.transliteration.lareevar;
    this.transliteration.lareevar_assist = this.transliteration.lareevar && this.transliteration.lareevar_assist;
    this.transliteration.punctuation = !this.transliteration.lareevar && this.transliteration.punctuation;
    this.transliteration.punctuation_assist = this.transliteration.punctuation && this.transliteration.punctuation_assist;
    this.savePreference()
  }

  getShareLink(item) {
    let lineno = '';
    if (['ggs', 'ks'].indexOf(this.page_info.scripture) > -1) {
      lineno = item.lineno;
    }
    if (['ak', 'dg'].indexOf(this.page_info.scripture) > -1) {
      lineno = item.pagelineID;
    }
    if (this.page_info.scripture === 'bgv') {
      lineno = item.pauri_lineID;
      return 'http://' + location.host + '/' + this.page_info.base_url + '/' + item.vaarID + '/pauri/' + this.cur_page + '/line/' + lineno;
    }
    if (this.page_info.remember_me_url.indexOf('bhai-nand-lal') > -1) {
      lineno = item.pagelineID;
      return 'http://' + location.host + '/' + this.page_info.base_url + '/' + item.pageID + '/line/' + lineno;
    }
    return 'http://' + location.host + '/' + this.page_info.base_url + '/' + this.cur_page + '/line/' + lineno;
  }

  initShareText() {
    this.shareText = this.page_info.meta_description;
    if ('ggs' === this.page_info.scripture) {
      this.shareText = 'ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰਪ੍ਰਸਾਦਿ ॥ - One Universal Creator God, TheName Is Truth  Creative Being Personified No Fear No Hatred Image Of The Undying, Beyond Birth, Self-Existent. By Guru\'s Grace~';
    }
    if ('ks' === this.page_info.scripture) {
      this.shareText = '';
    }
    if ('ak' === this.page_info.scripture) {
      this.shareText = 'ਸਲੋਕੁ ॥ - Shalok:';
    }

    if ('dg' === this.page_info.scripture) {
      this.shareText = '';
    }

    if (this.page_info.scripture === 'bgv') {
      this.shareText = 'ਨਮਸਕਾਰ ਗੁਰਦੇਵ ਕੋ ਸਤਿਨਾਮ ਜਿਸ ਮੰਤ੍ਰ ਸੁਣਾਇਆ। - I bow before the Guru (Guru Nanak Dev) who recited the Satnam mantra(for the world).';
    }
    if (['ghazal', 'quatrains', 'zindginama', 'rahitnama', 'tankahnama',
      'ganjnama', 'jot_bikas', 'jot_bikas_persian'].indexOf(this.page_info.scripture) > -1) {
      this.shareText = 'ਹਵਾਇ ਬੰਦਗੀ ਆਵੁਰਦ ਦਰ ਵਜੂਦ ਮਰਾ - The attraction of meditation and religious devotion brought me into this world';
    }
  }

  getShareText(item) {
    let preference_static = localStorage.getItem('preference_static');
    let ret = item.punjabi;
    if (preference_static) {
      let pref = JSON.parse(preference_static);
      let shares_ta = pref.share.translation;
      let shares_ti = pref.share.transliteration;
      if (shares_ta.english) {
        ret += ('-' + item.english);
      }
      if (shares_ti.roman) {
        ret += ('-' + item.translit);
      }
      if (shares_ti.english) {
        ret += ('-' + item.roman);
      }
      if (shares_ti.hindi) {
        ret += ('-' + item.hindi);
      }
      if (shares_ti.shahmukhi) {
        ret += ('-' + item.urdu);
      }
      return ret;
    }
    return item.punjabi + '-' + item.translit + '-' + item.english;
  }

  copyText() {
    let text = (document.getElementsByClassName('ang-content')[0] as HTMLElement).innerText;
    text = text.replace(/Shabad View/g, '').replace(/Verse View/g, '').replace(/Page View/g, '')
    .replace(/Ang View/g, '').replace(/Share to/g, '');

    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert('Copied Successfully');
  }
}
