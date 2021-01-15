import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugranthsahibindexchapterComponent } from './gurugranthsahibindexchapter.component';

describe('GurugranthsahibindexchapterComponent', () => {
  let component: GurugranthsahibindexchapterComponent;
  let fixture: ComponentFixture<GurugranthsahibindexchapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurugranthsahibindexchapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurugranthsahibindexchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
