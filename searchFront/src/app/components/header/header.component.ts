import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('twitter', {static: false}) twitter: ElementRef;
  constructor(private meta: Meta) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  getShareUrl() {
    return location.href;
  }

  getShareText() {
    let tag = (document.getElementsByTagName('title')[0] as HTMLElement);
    let desc = tag?tag.innerText:'';
    return desc;
  }
}
