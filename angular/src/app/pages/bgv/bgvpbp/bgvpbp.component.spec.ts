import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGVpbpComponent } from './bgvpbp.component';

describe('BGVpbpComponent', () => {
  let component: BGVpbpComponent;
  let fixture: ComponentFixture<BGVpbpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGVpbpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGVpbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
