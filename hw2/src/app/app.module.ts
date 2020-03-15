import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { LoginmoduleModule } from './loginmodule/loginmodule.module';

@NgModule({
  declarations: [
    AppComponent
    // ,
    // LogincomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
