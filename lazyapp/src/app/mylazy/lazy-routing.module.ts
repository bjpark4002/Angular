import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { ProductComponent } from '../product/product.component';

const  myroutes:Routes=[
  {path:'', component:CustomerComponent},
{path:'product', component:ProductComponent}];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forChild(myroutes)
  ],
  exports:[RouterModule]
})
export class LazyRoutingModule { }
