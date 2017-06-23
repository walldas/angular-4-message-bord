import { Component } from '@angular/core';


@Component ({
    selector:'nav',
    template: `
        <div class="nav-bar">
                <button routerLink="/" class="btn btn-success">Message bord</button>
                <button routerLink="/messages" class="btn btn-warning">Messages</button>
        </div>
    `
})

export class NavComponent {
    constructor() {}
}