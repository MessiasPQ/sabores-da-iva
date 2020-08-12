import { MenuRoutingModule } from './menu-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  declarations: [MenuPageComponent]
})
export class MenuModule { }
