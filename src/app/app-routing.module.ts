import { FramePageComponent } from './shared/master/frame';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  FramePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'menu',
    component:  FramePageComponent,
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
