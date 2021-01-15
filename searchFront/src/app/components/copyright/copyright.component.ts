import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  current_year: string;
  constructor() { }

  ngOnInit() {
    this.current_year = new Date().getFullYear().toString();
  }

}
