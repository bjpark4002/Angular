import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistercomponentComponent } from '../registercomponent/registercomponent.component';



@NgModule({
  declarations: [RegistercomponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    [RegistercomponentComponent]
  ]
})
export class RegistermoduleModule { }
