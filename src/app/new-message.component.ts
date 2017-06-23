import { Component} from '@angular/core';
import {WebService} from './web.service';

@Component ({
    selector:'new-message',
    template: `

    <div class="form-group">
        <label for="owner">Owner:</label>
            <input type="text" class="form-control" id="owner" [(ngModel)]="message.owner">
    </div>
    <div class="form-group">
        <label for="text">text:</label>
            <input type="text" class="form-control" id="text" [(ngModel)]="message.text">
        <button (click)="post()" class="btn btn-primary" type="button">Post</button>
    </div>
  
    `
})

export class NewMessageComponent {
  
    constructor(private webService:WebService){ }
  
    message={
        owner:"",
        text:""

    }


    post(){
        this.webService.postMessage(this.message);
    }
}