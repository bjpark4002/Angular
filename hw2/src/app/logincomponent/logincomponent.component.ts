import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  User = [ {'username':'' , 'password':''}]

  getValue(value1, value2){
    this.User[0]['username'] = value1;
    this.User[0]['password'] = value2;
    console.log("username : ",this.User[0]['username']);
    console.log("password : ",this.User[0]['password']);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
