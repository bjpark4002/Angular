import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyobservableComponent } from './myobservable/myobservable.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'myobservable', component:MyobservableComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**', component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
