import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeModule } from './my-home/my-home.module';
import { MySampleModule } from './my-sample/my-sample.module';
import { CustomerComponent } from './customer/customer.component';
// import { HomeComponent } from './home/home.component';
// import { SampleComponent } from './sample/sample.component';

import {FormsModule} from '@angular/forms';


@NgModule({  //pass json object.
  declarations: [
    AppComponent,
    // HomeComponent,
    // SampleComponent
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // ,
    // MyHomeModule,
    // MySampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
