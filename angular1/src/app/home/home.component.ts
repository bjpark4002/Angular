import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // ,
  // providers:[DataService]
})
export class HomeComponent implements OnInit {

  // constructor() { }

  title='welcome to class (home component)'
  mssg='Hello';

constructor( private  dataservice: DataService){
  this.mssg = this.dataservice.getMessage();

}

  ngOnInit(): void {
  }

}
