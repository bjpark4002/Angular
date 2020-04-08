import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorServiceService } from './service/token-interceptor-service.service';
import { LoginService } from './auth/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorServiceService, multi: true}, LoginService],
                                                                                  // multi : ture  to use more than one different interceptor
  bootstrap: [AppComponent]
})
export class AppModule { }
