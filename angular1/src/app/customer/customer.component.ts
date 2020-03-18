import { Component, Input,EventEmitter,Output } from '@angular/core';


@Component({
    selector:'app-customer',
    templateUrl:'./customer.component.html',
    styleUrls: ['./customer.component.css']

})
export class CustomerComponent{

// title = "Hello Class"
flag = false;

// @Input('mytitle') ss = '';

@Output()
countchanged = new EventEmitter<number>(); //declare type inside <>, it decides what type of value will be sent

counter = 0;

increment(){
    this.counter++;
    this.countchanged.emit(this.counter);
}
decrement(){
    this.counter--;
    this.countchanged.emit(this.counter);
}



Customer = [
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20},
    {'Name':'bob','Age':20}
]


clickHandler(event){
    debugger;
    // this.title = event
}
getValue(value){
    this.flag = !this.flag;
    // debugger;
    // return value;
}
constructor(){

}
}