import { Component } from '@angular/core';
import { MessagesComponent} from './messages-component';
import {NewMessageComponent} from './new-message.component';


@Component({
  selector: 'my-app',
  template: `
  
  <h1 class="text-center"> Message board:</h1>
  <div class="container">

    <new-message></new-message>
    <messages></messages>

  </div>

  `,
})
export class AppComponent  { }
