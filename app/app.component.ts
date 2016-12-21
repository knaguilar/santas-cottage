import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    	<a routerLink="/sessions" routerLinkActive="active">Sessions</a>
    </nav>
   	<router-outlet></router-outlet>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
	title = 'EastBrook Mall Santa Set 2016';
  //add date and day #
}