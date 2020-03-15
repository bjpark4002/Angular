import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from '../logincomponent/logincomponent.component';



@NgModule({
  declarations: [LogincomponentComponent],
  imports: [
    CommonModule
  ],
  exports:[LogincomponentComponent]
})
export class LoginmoduleModule { }
