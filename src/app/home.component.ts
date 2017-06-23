import { Component } from '@angular/core';
import { MessagesComponent} from './messages-component';
import {NewMessageComponent} from './new-message.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: `
  
  
  <div class="container">

    <new-message></new-message>
    <messages></messages>

  </div>

  `,
})
export class HomeComponent  {}