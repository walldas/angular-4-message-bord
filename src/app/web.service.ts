import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {
    BASE_URL='http://localhost:63145/api';

    private messageStore=[];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http) {
        this.getMessages();
    }
     getMessages(user) {
        
            user = (user)?'/'+user:'';
            this.http.get(this.BASE_URL +'/messages'+ user).subscribe(response=>{
                this.messages = response.json();
            },
            error => {
                console.error("negalima gauti zinuciu :( ");
            });
            
    }

    async postMessage(message){
        try{
            var response = await this.http.post(this.BASE_URL +'/messages',message).toPromise();
            this.messages=response.json();
            this.messageSubject.next(this.messages);
        }catch(error){
            console.error("negalima gauti zinuciu :(  ble");
            
        }
    }
}