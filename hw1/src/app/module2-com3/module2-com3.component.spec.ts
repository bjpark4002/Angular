import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Com3Component } from './module2-com3.component';

describe('Module2Com3Component', () => {
  let component: Module2Com3Component;
  let fixture: ComponentFixture<Module2Com3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2Com3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2Com3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
