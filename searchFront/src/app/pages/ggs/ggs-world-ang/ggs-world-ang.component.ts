import { Component, OnInit, TemplateRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { hexToRgbA } from 'src/app/global/utility';

@Component({
  selector: 'app-ggs-world-ang',
  templateUrl: './ggs-world-ang.component.html',
  styleUrls: ['./ggs-world-ang.component.scss']
})
export class GgsWorldAngComponent implements OnInit {
  modalRef: BsModalRef;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile12.jpg)";
  param:Array<string> = ['ak'];
  footerColor = "#3f0359";
  public social_flag: boolean = false;
  public social_string: string = "Social Sharing On";
  public page_info: any;
  public showFont: boolean = false;

  public maxCount: number;
  public cur_page: number;
  public first_page: number;
  public line_no: number;
  public perPage: number;
  public activeBg: string;

  public transliterations: any[] = [];
  public translations: any[] = [];
  public font: {
    gurmukhi: {size: number, color: string},
    // other: {size: number, color: string},
    translation: {size: number, color: string},
    transliteration: {size: number, color: string}
  }

  public display = { split: false, center: false};

  public default_gurmukhi = {size: 20, color: '#333333'};
  public default_translation = {size: 16, color: '#880808'};
  public default_transliteration = {size: 16, color: '#366732'};
  public default_langs: any[] = [54, 23, 59];

  public selected_langs: any[] = [54, 23, 59];

  public staticPreference: any;

  constructor(private titleService: Title, private modalService: BsModalService, private searchService: SearchService, private route: ActivatedRoute, private router: Router, private ts: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.cur_page = 1;
    this.first_page = 1;
    this.line_no = 1;
    this.maxCount = 1430;
    this.perPage = 25;
    this.page_info = { lines: []};
    this.activeBg = hexToRgbA(this.footerColor, 0.7);
    this.route.params.subscribe(p=>{
      this.first_page = p.page_no || 1;
      this.cur_page = this.first_page;
      this.line_no = p.line_no || 1;
    });
    this.font = {
      gurmukhi: this.default_gurmukhi,
      transliteration: this.default_transliteration,
      translation: this.default_translation
    }
    let savedPreference = localStorage.getItem('ggs-world-preference');
    if(savedPreference) {
      let obj = JSON.parse(savedPreference);
      this.selected_langs = obj.selected_langs;
      if(this.selected_langs.length === 0) {
        this.selected_langs = [54, 23, 59];
      }
      this.social_flag = obj.social_flag;
      if(obj.font){
        this.font = obj.font;
        if(!obj.font.gurmukhi) {
          obj.font.gurmukhi = this.default_gurmukhi
        }
        if(!obj.font.translation) {
          obj.font.translation = this.default_translation
        }
        if(!obj.font.transliteration) {
          obj.font.transliteration = this.default_transliteration
        }
      }
      if(obj.display){
        this.display = obj.display;
      }
    }else{
      this.selected_langs = [54, 23, 59];
      this.display = { split: false, center: false};
    }

    let staticPreference = localStorage.getItem('preference_static');
    if (staticPreference) {
      this.staticPreference = JSON.parse(staticPreference);
    }

    this.getTotalCount();
    this.getPageInfo();
    this.getTransliteration();
    this.getTranslation();
  }

  resetFont(name) {
    if(name === 'gurmukhi') {
      this.font.gurmukhi = { size: 20, color: '#333333'};
    }
    if(name === 'translation') {
      this.font.translation = { size: 16, color: '#366732'};
    }
    if(name === 'transliteration') {
      this.font.transliteration = { size: 16, color: '#880808'};
    }
  }

  getTotalCount() {
    this.searchService.ggs_world_total().subscribe(res=>{
      this.maxCount = res;
    });
  }

  getTransliteration() {
    this.searchService.ggs_world_transliteration().subscribe(res=>{
      this.transliterations = res;
      this.transliterations.forEach((item)=>{
        if(this.selected_langs){
          if(this.selected_langs.indexOf(item.id)>-1){
            item.select = true;
          }else{
            item.select = false;
          }
        }
      })
    });
  }

  getTranslation() {
    this.searchService.ggs_world_translation().subscribe(res=>{
      this.translations = res;
      this.translations.forEach((item)=>{
        if(this.selected_langs){
          if(this.selected_langs.indexOf(item.id)>-1){
            item.select = true;
          }else{
            item.select = false;
          }
        }
      })
    });
  }

  getPageInfo() {
    this.searchService.ggs_world_ang(this.cur_page).subscribe(res=>{
      this.page_info = res;
      this.meta.updateTag({name: 'Description', content: res.meta_description});
      this.meta.updateTag({property: 'og:description', content: res.meta_description});
      this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
      this.meta.updateTag({property: 'og:title', content: res.meta_title});
      this.meta.updateTag({property: 'og:url', content: location.href});
      this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"})
      this.titleService.setTitle(res.meta_title);
    });
  }

  goBegin(){
    this.cur_page = 1;
    this.getPageInfo();
  }

  goBack(){
    this.cur_page = Math.floor(this.cur_page) - 1;
    this.getPageInfo();
  }

  goNext(){
    this.cur_page = Math.floor(this.cur_page) + 1;
    this.getPageInfo();
  }

  goLast(){
    this.cur_page = this.maxCount;
    this.getPageInfo();
  }

  pageChanged(event: any) {
    this.getPageInfo();
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
    this.save_preference();
  }

  openTiModal(titemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(titemplate);
  }

  openTaModal(tatemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(tatemplate);
  }

  updateLanguages(item: any) {
    if(item.select) {
      this.selected_langs.push(item.id);
    }else{
      let index = this.selected_langs.indexOf(item.id);
      this.selected_langs.splice(index, 1);
    }
    this.save_preference();
  }

  togglePunjabi() {
    let index = this.selected_langs.indexOf(54);
    if(index>-1){
      this.selected_langs.splice(index, 1);
    }else{
      this.selected_langs.push(54);
    }
    this.save_preference();
  }

  save_preference() {
    let param = {
      selected_langs: this.selected_langs,
      social_flag: this.social_flag,
      font: this.font,
      display: this.display
    };
    localStorage.setItem('ggs-world-preference', JSON.stringify(param));
  }

  getShareLink(item) {
    return 'http://' + location.host + '/guru-granth-sahib/world/ang/'+ item.page + '/line/' + item.line;
  }

  print() {
    window.print();
  }

  resetLangs() {
    this.selected_langs = [54, 23, 59];
    this.display = {split: false, center: false};
    this.translations.forEach((item)=>{
      if(this.selected_langs){
        if(this.selected_langs.indexOf(item.id)>-1){
          item.select = true;
        }else{
          item.select = false;
        }
      }
    });

    this.transliterations.forEach((item)=>{
      if(this.selected_langs){
        if(this.selected_langs.indexOf(item.id)>-1){
          item.select = true;
        }else{
          item.select = false;
        }
      }
    })

    this.save_preference();
  }

  getShareText(item: any){
    return item.text + '-' + item.ta[40].text + '-' + item.ti[13].text;
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
