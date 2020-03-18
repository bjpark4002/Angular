import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class EmployeeService {


  private _url: string = "/assets/data/employees.json"
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]> {

    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));

    // return [
    //   { "id":1, "name": "One", "age"  : 30},
    //   { "id":2, "name": "Two", "age"  : 35},
    //   { "id":3, "name": "Three", "age"  : 40},
    //   { "id":4, "name": "Four", "age"  : 45}

    // ]
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message||"Server Error");
  }
}
