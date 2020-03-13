import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Module1Com1Component } from './module1-com1/module1-com1.component';
// import { Module1Com2Component } from './module1-com2/module1-com2.component';
// import { Module1Com3Component } from './module1-com3/module1-com3.component';
// import { Module2Com1Component } from './module2-com1/module2-com1.component';
// import { Module2Com2Component } from './module2-com2/module2-com2.component';
// import { Module2Com3Component } from './module2-com3/module2-com3.component';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';

@NgModule({
  declarations: [
    AppComponent
    // ,
    // Module1Com1Component,
    // Module1Com2Component,
    // Module1Com3Component,
    // Module2Com1Component,
    // Module2Com2Component,
    // Module2Com3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
