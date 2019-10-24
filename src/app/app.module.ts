import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// plugins
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// modules
import { AppRoutingModule } from './app-routing.module';
// componets
import { AppComponent } from './app.component';
// popover module
import { LocationModule } from './components/popovers/location/location.module';
//modals module
import { FilterDoctorModule } from './components/modals/filter-doctor/filter-doctor.module';
import { FilterHospitalModule } from './components/modals/filter-hospital/filter-hospital.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    // popover module
    LocationModule,
    // modal module
    FilterDoctorModule, FilterHospitalModule
  ],
  providers: [
    StatusBar, SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
