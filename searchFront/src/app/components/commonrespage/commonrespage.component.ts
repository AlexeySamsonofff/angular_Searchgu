import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { hexToRgbA } from 'src/app/global/utility';


@Component({
  selector: 'app-commonrespage',
  templateUrl: './commonrespage.component.html',
  styleUrls: ['./commonrespage.component.scss']
})
export class CommonrespageComponent implements OnInit {
  @Input() book_lang: string;
  @Input() title: string;
  @Input() baseUrl: string;
  @Input() volumeno: number;
  @Input() maxPage: number;
  @Input() firstPage: number;
  @Input() pageInfo: any;
  @Input() display_field: string;
  @Input() noChapter: boolean;
  @Input() footerColor: string;
  @Output() getPageInfo = new EventEmitter<number>();

  public pageno: number;
  public showChapter: boolean;
  public textAlign: string;
  public fontSize: number;
  public fontSizeVal: string;
  public activeBg: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.textAlign = 'center';
    this.fontSize = 20;
    this.fontSizeVal = "20px!important";
    this.pageno = this.firstPage ? this.firstPage: 1;
    this.activeBg = hexToRgbA(this.footerColor, 0.7);
  }

  get_page_info() {
    this.getPageInfo.emit(this.pageno);
  }

  onSearch() {
    this.get_page_info();
  }

  begin() {
    this.pageno = 1;
    this.get_page_info();
    window.scroll(0, 0);
  }

  next() {
    this.pageno = Math.floor(this.pageno) + 1;
    this.get_page_info();
    window.scroll(0, 0);
  }

  last() {
    this.pageno = this.maxPage;
    this.get_page_info();
    window.scroll(0, 0);
  }

  previous() {
    this.pageno = Math.floor(this.pageno) - 1;
    this.get_page_info();
    window.scroll(0, 0);
  }

  displayContent(str: string) {
    return str.replace(/\n/g, "<br/>");
  }

  viewHindi() {
    // this.book_lang = 'gurmukhi';
    // localStorage.setItem('book_lang', this.book_lang);
    // this.get_page_info();
    this.router.navigate(['/' + this.baseUrl + '/page/' + this.pageno + '/hindi']);
  }

  viewGurmukhi() {
    // this.book_lang = 'hindi';
    // localStorage.setItem('book_lang', this.book_lang);
    // this.get_page_info();
    this.router.navigate(['/' + this.baseUrl + '/page/' + this.pageno + '/gurmukhi']);
  }

  setAlign(align: string) {
    this.textAlign = align;
  }

  setFontSize() {
    this.fontSizeVal = this.fontSize + "px!important";
  }

  print() {
    if(location.href.substr(location.href.length - 4) === 'page') {
      window.open(location.href + '/1/' + 'print-view', '_blank', 'width=600,height=400,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0');
    }else{
      window.open(location.href + '/print-view', '_blank', 'width=600,height=400,scrollbars=yes,menubar=no,status=yes,resizable=yes,screenx=0,screeny=0');
    }
  }
}
