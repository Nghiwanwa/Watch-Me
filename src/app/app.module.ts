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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    MapComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
