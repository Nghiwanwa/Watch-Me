import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { LoginComponent } from './Application/login/login.component';
import { SignupComponent } from './Application/signup/signup.component';
import { MapComponent } from './Application/map/map.component';


const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"map",
    component:MapComponent
  },
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
   
 }
