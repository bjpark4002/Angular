import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'employee', component:EmployeeComponent},
  { path:'custom',loadChildren: './mylazy/mylazy.module#MylazyModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
