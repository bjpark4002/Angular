import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../auth/login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService implements HttpInterceptor {

  constructor(private _loginService: LoginService) { }

//Req is for the outgoing request object to handle
//Next is for the next interceptor in the chain or the backend if no interceptors remain in the chain.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor")

    const token = this._loginService.getAuthToken();
    let newHeaders = req.headers;

    if(token){
      //if we have a token, we append it to our new headers.
      newHeaders = newHeaders.append('authtoken', token);
    }
    //finally we have to clone our request with our new headers
    // this is required because HttpRequests are immutable 
    const authReq = req.clone({headers: newHeaders});

    //then we return an observable that will run the request 
    //or pass it to the next interceptor if any.
    return next.handle(authReq);  //intercepting a request


    ///////////////////////////////////////////////////////////////

    // return next.handle(authReq).pipe( // intercepting a response
    //   // do work here

    //   // we use the map operator to change the data from the response 
    //   map(resp => {
    //     //several http events go through that observable 
    //     //so we make sure that this is http response.

    //     if(resp instanceof HttpResponse){
    //       //just like for request, we create a clone of the response
    //       //and make changes to it, then return that clone.


    //       return resp.clone( {body: [{title: 'Replaced data in interceptor'}]}  );
    //     }
    //   })
    // );


  }
}
