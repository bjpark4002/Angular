import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Com3Component } from './module1-com3.component';

describe('Module1Com3Component', () => {
  let component: Module1Com3Component;
  let fixture: ComponentFixture<Module1Com3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1Com3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1Com3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
