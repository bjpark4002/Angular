import { Component, ViewChild, ElementRef } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1 in app';

  @ViewChild('app-customer') myChild:CustomerComponent // using reference

  @ViewChild('myInput') myrefTOinput : ElementRef;

  mycounter:number = 0;


  myeventHandler(data){
    this.mycounter = data;
    this.myChild.counter;
    this.myrefTOinput.nativeElement.style.background = 'Yellow';
  }
}
