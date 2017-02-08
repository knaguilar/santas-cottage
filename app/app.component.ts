import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
      <div class="container">
      <h1 class="title">{{title}}</h1>
      <nav>
      	<a routerLink="/dashboard" routerLinkActive="active">Top Sales</a>
      	<a routerLink="/sessions" routerLinkActive="active">Sessions</a>
      </nav>
     	<router-outlet></router-outlet>
      </div>
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

// <div *ngIf="daysSince() < 30">
//   <h2 id="dayCounter">Day {{daysSince()}}</h2>
// </div>

// <h2 id="date">{{today | date: 'yMMMMEEEEd'}}</h2>