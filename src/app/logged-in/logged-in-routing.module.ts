import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HistoricalComponent} from './historical/historical.component';
import {ProfileComponent} from './profile/profile.component';
import {TelemetryComponent} from './telemetry/telemetry.component';
import {LoggedInGuard} from './logged-in.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/logged-in/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'historical',
    component: HistoricalComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'telemetry',
    component: TelemetryComponent,
    canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoggedInRoutingModule {
}
