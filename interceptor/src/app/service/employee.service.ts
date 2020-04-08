import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

class Employee {
  name : string
  age : number
}
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }
  private listEmployees: Employee[] = [
    {name : "bumjin", age : 1},
    {name : "park", age : 2}
  ];

  getEmployees() : Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('URL').pipe(catchError(this.handleError));
  }

  //httpClient mothod can handle both server and client side error.
  private handleError(errorResponse: HttpErrorResponse) {
    // how to distinguish those two types ?

    if( errorResponse.error instanceof ErrorEvent ){ // check the type of error objecdt here. client side erorr
      console.error('client side error: ', errorResponse.error.message);
    }else{ // server side
      console.error('server side error: ', errorResponse);
    }
    //user friendly message
    return throwError("there is a problem with server");

  }





}
