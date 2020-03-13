import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Com2Component } from './module2-com2.component';

describe('Module2Com2Component', () => {
  let component: Module2Com2Component;
  let fixture: ComponentFixture<Module2Com2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Com2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
