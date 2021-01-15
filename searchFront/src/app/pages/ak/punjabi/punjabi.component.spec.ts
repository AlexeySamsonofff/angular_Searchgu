import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabiComponent } from './punjabi.component';

describe('PunjabiComponent', () => {
  let component: PunjabiComponent;
  let fixture: ComponentFixture<PunjabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunjabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
