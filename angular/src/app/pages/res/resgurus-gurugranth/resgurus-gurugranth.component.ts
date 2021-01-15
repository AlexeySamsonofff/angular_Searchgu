import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resgurus-gurugranth',
  templateUrl: './resgurus-gurugranth.component.html',
  styleUrls: ['./resgurus-gurugranth.component.scss']
})
export class ResgurusGurugranthComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  constructor(private ts: Title) { }

  ngOnInit() {
    this.ts.setTitle("Guru Nanak Dev Ji- SearchGurbani.com");
  }
}
