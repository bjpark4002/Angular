import { Component } from '@angular/core';


@Component({
    selector:'app-customer',
    templateUrl:'./customer.component.html',
    styleUrls: './customer.component.css'

})
export class CustomerComponent{

title = "Hello Class"
flag = false;

Customer = [
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20}
]

clickHandler(event){
    debugger;
    this.title = event
}
getValue(value){
    this.flag = !this.flag;
    // debugger;
    // return value;
}
}