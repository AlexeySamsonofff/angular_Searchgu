import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGSIntroComponent } from './dgsintro.component';

describe('DGSIntroComponent', () => {
  let component: DGSIntroComponent;
  let fixture: ComponentFixture<DGSIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGSIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGSIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
