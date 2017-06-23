import { Component } from '@angular/core';
import {WebService} from './web.service';
import {ActivatedRoute} from '@angular/router';

@Component ({
    selector:'messages',
    template: `
    <div *ngFor="let message of messages" >
       <h3 [routerLink]="['/messages', message.owner]" style="cursor:pointer"> {{message.owner}} pasake :</h3> 
       {{message.text}}
    </div>`
})

export class MessagesComponent {
    messages;
    constructor(private webService:WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        var name = (this.route.snapshot.params.name);
        this.webService.getMessages(name);
        this.webService.messages.subscribe(messages=>{
            this.messages=messages;
        })
    }
}