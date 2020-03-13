import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Com1Component } from './module2-com1.component';

describe('Module2Com1Component', () => {
  let component: Module2Com1Component;
  let fixture: ComponentFixture<Module2Com1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Com1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
