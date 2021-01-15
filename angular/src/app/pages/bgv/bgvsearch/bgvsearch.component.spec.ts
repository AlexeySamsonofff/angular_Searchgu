import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BGVsearchComponent } from './bgvsearch.component';

describe('BGVsearchComponent', () => {
  let component: BGVsearchComponent;
  let fixture: ComponentFixture<BGVsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BGVsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BGVsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
