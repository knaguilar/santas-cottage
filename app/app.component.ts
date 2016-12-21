import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div *ngIf="daysSince() < 30">
    <h2>Day {{daysSince()}}</h2>
    </div>
    <h2>{{today | date: 'yMMMMEEEEd'}}</h2>

    <nav>
    	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    	<a routerLink="/sessions" routerLinkActive="active">Sessions</a>
    </nav>
   	<router-outlet></router-outlet>
  `,
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  today: number = Date.now();
	title = 'EastBrook Mall Santa Set 2016';

  daysSince(): number {
    var date = new Date();
    var day = date.getDate() + 6;
        return day;
  }
}