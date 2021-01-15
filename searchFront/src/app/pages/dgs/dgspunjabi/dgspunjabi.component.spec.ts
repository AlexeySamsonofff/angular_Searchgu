import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGSpunjabiComponent } from './dgspunjabi.component';

describe('DGSpunjabiComponent', () => {
  let component: DGSpunjabiComponent;
  let fixture: ComponentFixture<DGSpunjabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGSpunjabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGSpunjabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
