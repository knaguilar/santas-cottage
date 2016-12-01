import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/sessions">Sessions</a>
   	<router-outlet></router-outlet>
  `
})
export class AppComponent {
	title = 'EastBrook Mall Santa Set 2016';
}