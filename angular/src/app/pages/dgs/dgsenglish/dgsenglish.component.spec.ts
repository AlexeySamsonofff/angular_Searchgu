import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGSEnglishComponent } from './dgsenglish.component';

describe('DGSEnglishComponent', () => {
  let component: DGSEnglishComponent;
  let fixture: ComponentFixture<DGSEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGSEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGSEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
