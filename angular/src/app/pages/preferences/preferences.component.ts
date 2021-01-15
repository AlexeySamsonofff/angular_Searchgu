import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { initDayOfMonth } from 'ngx-bootstrap/chronos/units/day-of-month';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";

  form: any;

  constructor(private ts: Title, private meta: Meta,
    private router: Router, private _location: Location, private searchService: SearchService){}

  ngOnInit() {
    let path = window.location.pathname.replace('/', '');
    this.searchService.getMeta(path).subscribe(ret=>{
      let metaInfo = ret.data;
      this.ts.setTitle(metaInfo.title);
      this.meta.updateTag({name: 'Description', content: metaInfo.description});
      this.meta.updateTag({property: 'og:description', content: metaInfo.description});
      this.meta.updateTag({name: 'Keywords', content: metaInfo.keywords});
      this.meta.updateTag({property: 'og:title', content: metaInfo.title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
    })
    let preference_static = localStorage.getItem('preference_static');
    if(preference_static) {
      this.form = JSON.parse(preference_static);
    }else{
      this.resetForm();
    }
  }

  resetForm() {
    this.form = {
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
      },
      mouseover_gurmukhi_dic: false,
      show_attributes: true,
      allow_share_lines: true,
      share: {
        translation: {
          english: true,
        },
        transliteration: {
          roman: true,
          english: false,
          hindi: false,
          shahmukhi: false
        }
      },
      ggs_audio: 'gms'
    }
  }

  goback() {
    this._location.back();
  }

  toggleTiShare(lang) {
    let transliteration = {
      roman: false,
      english: false,
      hindi: false,
      shahmukhi: false
    };
    transliteration[lang] = this.form.share.transliteration[lang];
    this.form.share = {
      ...this.form.share,
      transliteration: transliteration
    }
  }

  // preferences/save
  save() {
    localStorage.setItem('preference_static', JSON.stringify(this.form));
    let savedPreference = localStorage.getItem('preference');
    let preference;
    if(savedPreference) {
      preference = JSON.parse(savedPreference);
    }else{
      preference = {
        transliteration: {
          roman: true,
          english: false,
          hindi: false,
          shahmukhi: false,
          punjabi: false,
          punctuation: false,
          punctuation_assist: false,
          lareevar: false,
          lareevar_assist: false
        },
        translation: {
          ggs: {
            english: false,
            eng_mms: false,
            punj_mms: false,
            ggd: false,
            ft: false,
            fth: false,
            ss: false,
          },
          ak: {
            english: false,
          },
          bgv: {
            english: false,
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
          },
          dg: {
            english: false,
            teeka: false,
          },
          ks: {
            english: false,
            teeka: false,
            teeka_roman: false,
            teeka_hindi: false,
          },
          bnl: {
            english: false,
            teeka: false,
            teekahindi: false,
          }
        },
        displayMode: {
          split_view: false,
          dark_mode: false,
          center_align: false,
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
        }
      }
    }
    preference.displayMode = {...preference.displayMode, split_view: this.form.displayMode.split_view!='line'};
    preference.transliteration = {
      ...preference.transliteration,
      roman: this.form.transliteration.roman,
      english: this.form.transliteration.english,
      hindi: this.form.transliteration.hindi,
      shahmukhi: this.form.transliteration.shahmukhi,
      punjabi: this.form.transliteration.main_lang==='punjabi',
      punctuation: this.form.transliteration.main_lang==='punctuation',
      lareevar: this.form.transliteration.main_lang==='lareevar',
    };
    preference.font = this.form.font;
    preference.translation = {
      ...preference.translation,
      ggs: {...this.form.translation.ggs, english: this.form.translation.english},
      ak: {english: this.form.translation.english},
      bgv: {...this.form.translation.bgv, english: this.form.translation.english},
      dg: {...this.form.translation.dg, english: this.form.translation.english},
      ks: {...this.form.translation.ks, english: this.form.translation.english},
      bnl: {...this.form.translation.bnl, english: this.form.translation.english},
    };
    localStorage.setItem('preference', JSON.stringify(preference));
    alert('Settings have been saved!');
  }

  reset() {
    this.resetForm();
    this.save();
  }

}
