import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Com1Component } from '../module2-com1/module2-com1.component';
import { Module2Com2Component } from '../module2-com2/module2-com2.component';
import { Module2Com3Component } from '../module2-com3/module2-com3.component';



@NgModule({
  declarations: [Module2Com1Component,Module2Com2Component,Module2Com3Component ],
  imports: [
    CommonModule
  ],
  exports: [Module2Com1Component,Module2Com2Component,Module2Com3Component  ]
})
export class Module2Module { }
