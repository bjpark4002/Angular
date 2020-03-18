import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number
  @Input() myNumber2: string;


  @Input() set myNewNumber(number: number){
    this.myNumber = number;
  } 

  get myNewNumber(){
    return this.myNumber;
  }
  constructor() { }


  ngOnChanges(changes: SimpleChanges){  // this executes before ngOnInit 
    const newNumberChange: SimpleChange = changes.myNewNumber;
    
    console.log('Previous value - (ng on changes)', newNumberChange.previousValue )
    console.log('Current value - (ng on changes)', newNumberChange.currentValue )
    // console.log('Name : ', changes.myNumber2.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
  }

  ngOnInit(): void {
    console.log('ng On Init value ', this.myNewNumber);
    // console.log('Current value ', newNumberChange.previousValue )
  
  }

  ngDoCheck(){

    console.log("ngDoCheck called , "+this.myNumber2);
  }


  ngAfterContentInit(){
    console.log("wowowowowowowowoow");
  }

  ngAfterContentChecked(){
    console.log("This was executed after ngAfterContentInit (ng after content checked)");
  }
  

  ngAfterViewInit(){
    console.log("this was executed after ngAfterContentChecked");
  }

  ngAfterViewChecked(){
    console.log("This was executed after ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log("Component has been destroyed");
  }
}
