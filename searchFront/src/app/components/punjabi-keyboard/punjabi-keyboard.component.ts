import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { addCharacter } from 'src/app/global/utility';

@Component({
  selector: 'app-punjabi-keyboard',
  templateUrl: './punjabi-keyboard.component.html',
  styleUrls: ['./punjabi-keyboard.component.scss']
})
export class PunjabiKeyboardComponent implements OnInit {
  @Output() addChar = new EventEmitter<boolean>();
  constructor() { }
  keys: any;
  ngOnInit() {
    
  }

  addKey(evt: any) {
    evt.stopPropagation();
    let elm = evt.target as HTMLElement;
    addCharacter(elm);
    this.addChar.emit(true);
  }
}
