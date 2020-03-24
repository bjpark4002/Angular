import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private _router : Router) { }


  User = [ {'username':'' , 'password':''}]

  getValue(value1, value2){
    this.User[0]['username'] = value1;
    this.User[0]['password'] = value2;
    console.log("username : ",this.User[0]['username']);
    console.log("password : ",this.User[0]['password']);
  }
  switchToRegister(){
    console.log("Go to Register");
    this._router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
