import { Component, OnInit, Input } from '@angular/core';
import { hexToRgbA } from 'src/app/global/utility';

@Component({
  selector: 'app-common-book-print-view',
  templateUrl: './common-book-print-view.component.html',
  styleUrls: ['./common-book-print-view.component.scss']
})
export class CommonBookPrintViewComponent implements OnInit {
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

  public pageno: number;
  public showChapter: boolean;
  public textAlign: string;
  public fontSize: number;
  public fontSizeVal: string;
  public activeBg: string;

  constructor() { }

  ngOnInit() {
    this.textAlign = 'center';
    this.fontSize = 20;
    this.fontSizeVal = "20px!important";
    this.pageno = this.firstPage ? this.firstPage: 1;
    this.activeBg = hexToRgbA(this.footerColor, 0.7);
  }

  displayContent(str: string) {
    return str.replace(/\n/g, "<br/>");
  }


  setAlign(align: string) {
    this.textAlign = align;
  }

  setFontSize() {
    this.fontSizeVal = this.fontSize + "px!important";
  }

  print() {
    window.print();
  }
}
