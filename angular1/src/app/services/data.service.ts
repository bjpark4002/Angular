import { TestService } from '../test.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService{

    message = 'Hello from Data Service';
    constructor(private myservice:TestService){

    }

    getMessage(){
        this.message = this.myservice.getupdateMessage();
        return this.message;

    }

}