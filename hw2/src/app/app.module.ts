import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { LoginmoduleModule } from './loginmodule/loginmodule.module';
import { RegistermoduleModule } from './registermodule/registermodule.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


var config = {
  apiKey: "AIzaSyAFahvktacUKH8RGffxVEWSZnKIQTYi884",
  authDomain: "angularproject-c856e.firebaseapp.com",
  databaseURL: "https://angularproject-c856e.firebaseio.com",
  projectId: "angularproject-c856e",
  storageBucket: "angularproject-c856e.appspot.com",
  messagingSenderId: "237809462493"
};



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LoginmoduleModule,
    RegistermoduleModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
