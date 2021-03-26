import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AnimationComponent} from './animation/animation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/animation'
  },
  {
    path: '/animation',
    component: AnimationComponent
  },
  {
    path: 'logged-in',
    loadChildren: () => import('./logged-in/logged-in.module').then(m => m.LoggedInModule)
  },
  {
    path: 'logged-out',
    loadChildren: () => import('./logged-out/logged-out.module').then(m => m.LoggedOutModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
