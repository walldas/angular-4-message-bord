import { Component,ViewChild } from '@angular/core';
import { MessagesComponent} from './messages-component';
import {NewMessageComponent} from './new-message.component';


@Component({
  selector: 'my-app',
  template: `
  
  <h1 class="text-center"> Message board:</h1>
  <div class="container">

    <new-message (onPosted)="onPosted($event)"></new-message>
    <messages></messages>

  </div>

  `,
})
export class AppComponent  { 

  @ViewChild(MessagesComponent) messages :MessagesComponent;

  onPosted(message){
    this.messages.messages.push(message);
  }
}
