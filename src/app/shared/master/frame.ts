import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet><app-footer></app-footer>'
})
export class FramePageComponent {}
