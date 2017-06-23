import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'my-app',
  template: `
  
  <h1 class="text-center">
   <nav></nav>
   </h1>
  <div class="container">

    <router-outlet></router-outlet>

  </div>

  `,
})
export class AppComponent  {}
