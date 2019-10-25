import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { FooterComponent } from './Application/footer/footer.component';
import { NavComponent } from './Application/nav/nav.component';
import { LoginComponent } from './Application/login/login.component';
import { SignupComponent } from './Application/signup/signup.component';
import { MapComponent } from './Application/map/map.component';
import { LandingComponent } from './Application/landing/landing.component';
import { UsersComponent } from './users/users.component';
<<<<<<< HEAD
import { ParentsComponent } from './Application/parents/parents.component';
=======
import { WatchesComponent } from './Application/watches/watches.component';
>>>>>>> 7ff0cf86d8514229da9fef2018c914e08bf15e5e

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    MapComponent,
    LandingComponent,
    UsersComponent,
<<<<<<< HEAD
    ParentsComponent
=======
    WatchesComponent
>>>>>>> 7ff0cf86d8514229da9fef2018c914e08bf15e5e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
