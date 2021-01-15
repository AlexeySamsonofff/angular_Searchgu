import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugranthsahibangbyangComponent } from './gurugranthsahibangbyang.component';

describe('GurugranthsahibangbyangComponent', () => {
  let component: GurugranthsahibangbyangComponent;
  let fixture: ComponentFixture<GurugranthsahibangbyangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurugranthsahibangbyangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurugranthsahibangbyangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
