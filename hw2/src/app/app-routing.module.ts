import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
{path : '', redirectTo:'login', pathMatch: 'full'},
{path : 'login', component: LogincomponentComponent},
{path: 'register', component: RegistercomponentComponent},
{path: 'main', component:MainpageComponent},
{path: 'page-not-found', component: PagenotfoundComponent},
{ path: '**', component: PagenotfoundComponent } //this wild card routing should come last because program tries to faid matches from the top


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LogincomponentComponent,
  RegistercomponentComponent,
  PagenotfoundComponent,
  MainpageComponent
]