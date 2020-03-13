import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Com1Component } from './module1-com1.component';

describe('Module1Com1Component', () => {
  let component: Module1Com1Component;
  let fixture: ComponentFixture<Module1Com1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Com1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
