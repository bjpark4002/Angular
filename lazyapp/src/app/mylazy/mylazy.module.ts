import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { ProductComponent } from '../product/product.component';
 
@NgModule({
  declarations: [CustomerComponent,ProductComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule   
  ],
  
})
export class MylazyModule { }
