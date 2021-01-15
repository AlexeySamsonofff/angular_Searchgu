import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripturesearchComponent } from './scripturesearch.component';

describe('ScripturesearchComponent', () => {
  let component: ScripturesearchComponent;
  let fixture: ComponentFixture<ScripturesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScripturesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScripturesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
