import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Com2Component } from './module1-com2.component';

describe('Module1Com2Component', () => {
  let component: Module1Com2Component;
  let fixture: ComponentFixture<Module1Com2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Com2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
