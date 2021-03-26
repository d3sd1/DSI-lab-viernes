import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoricalComponent } from './historical/historical.component';
import {LoggedInRoutingModule} from './logged-in-routing.module';



@NgModule({
  declarations: [HomeComponent, TelemetryComponent, ProfileComponent, HistoricalComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ]
})
export class LoggedInModule { }
