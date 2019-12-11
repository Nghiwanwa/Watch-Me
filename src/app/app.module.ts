import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AgmCoreModule} from '@agm/core'

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
import { ParentsComponent } from './Application/parents/parents.component';
import { WatchesComponent } from './Application/watches/watches.component';
import { FormsModule } from '@angular/forms';
import { ChildrenComponent } from './Application/parents/children/children.component';
import { GeofencesComponent } from './Application/geofences/geofences.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './Application/services/people.service';
import { RestService } from './Application/services/rest.service';
import { MapsService } from './Application/services/maps.service';
import { WatchesService } from './Application/services/watches.service';
import { ReportsService } from './Application/services/reports.service';
import { SOSComponent } from './Application/sos/sos.component';


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
    ParentsComponent,
    WatchesComponent,
    ChildrenComponent,
    GeofencesComponent,
    SOSComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD0evbOej4bdm3ZeF_kDaxBGQSiCPDCMRQ'
    }),
    
  ],
  providers: [
    PeopleService,
    RestService,
    MapsService,
    WatchesService,
    ReportsService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
