import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugranthsahibintroductionComponent } from './gurugranthsahibintroduction.component';

describe('GurugranthsahibintroductionComponent', () => {
  let component: GurugranthsahibintroductionComponent;
  let fixture: ComponentFixture<GurugranthsahibintroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurugranthsahibintroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurugranthsahibintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
