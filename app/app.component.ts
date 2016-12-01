import { Component } from '@angular/core';
import { LastYear } from './lastyear';

const SANTADAYS: LastYear[] = [
  
];


@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<h2>Today: {{today | date: 'yMMMMEEEEd'}}</h2>
		<ul class="operating">
			<li *ngFor="let session of sessionDay" [class.selected]="session === selectedSession" (click)="onSelect(session)">
				<span class="badge">Day: {{session.day}}</span>{{session.date}}
			</li>
		</ul>
		<my-session-detail [session]="selectedSession"></my-session-detail>
	`,
	styles: [`
	  .selected {
	    background-color: #787D7F !important;
	    color: white;
	  }
	  .operating {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 20em;
	  }
	  .operating li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    width: 18 em;
	    border-radius: 4px;
	  }
	  .operating li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .operating li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .operating .text {
	    position: relative;
	    top: -3px;
	  }
	  .operating .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
  	  }
	`]
})


export class AppComponent  {
	title = 'EastBrook Mall Santa Set 2016';
	sessionDay = SANTADAYS;
	today: number = Date.now();
	selectedSession: LastYear;

	onSelect(session: LastYear): void {
	  this.selectedSession = session;
	}
}
