import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGVviComponent } from './bgvvi.component';

describe('BGVviComponent', () => {
  let component: BGVviComponent;
  let fixture: ComponentFixture<BGVviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGVviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGVviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
