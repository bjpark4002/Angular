import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number:number = 2414;
  name: string = "Bumjin";

  isVisible: boolean = true;

  user= {
    name: "Bumjin"
  }


  switchVisibility(){
    this.isVisible = !this.isVisible;
  }
  updateValue(){
      // this.name = "Mr. Park";

      // this.user={ //this way, ngonchanges will be invoked because it is pass by value
      //   name: "Mr.Park"
      // }
      this.user.name = "Mr.Park"
    
  }
  get counter(){
    return this.number;
  }
  set counter(value){
    this.number = value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
