import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugranthsahibsearchComponent } from './gurugranthsahibsearch.component';

describe('GurugranthsahibsearchComponent', () => {
  let component: GurugranthsahibsearchComponent;
  let fixture: ComponentFixture<GurugranthsahibsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurugranthsahibsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurugranthsahibsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
