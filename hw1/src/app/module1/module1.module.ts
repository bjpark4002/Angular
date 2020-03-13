import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Com1Component } from '../module1-com1/module1-com1.component';
import { Module1Com2Component } from '../module1-com2/module1-com2.component';
import { Module1Com3Component } from '../module1-com3/module1-com3.component';



@NgModule({
  declarations: [Module1Com1Component,Module1Com2Component,Module1Com3Component],
  imports: [
    CommonModule
  ],
  exports:[Module1Com1Component,Module1Com2Component,Module1Com3Component]
})
export class Module1Module { }
