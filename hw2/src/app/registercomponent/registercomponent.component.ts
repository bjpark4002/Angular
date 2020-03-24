import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css','../logincomponent/logincomponent.component.css']
})
export class RegistercomponentComponent implements OnInit {

  constructor(private _router : Router) { }
  User = [ {'username':'' , 'password':'', 'confirm':''}]

  getValue(value1, value2, value3){
    this.User[0]['username'] = value1;
    this.User[0]['password'] = value2;
    this.User[0]['confirm'] = value3;
    console.log("username : ",this.User[0]['username']);
    console.log("password : ",this.User[0]['password']);
    console.log("confirm : ",this.User[0]['confirm']);
  }

  switchToLogin(){
    console.log("Go to login");
    this._router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
