import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGVIntroComponent } from './bgvintro.component';

describe('BGVIntroComponent', () => {
  let component: BGVIntroComponent;
  let fixture: ComponentFixture<BGVIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGVIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGVIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
