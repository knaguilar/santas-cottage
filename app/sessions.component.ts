import { Component, OnInit } from '@angular/core';

import { LastYear } from './lastyear';
import { ThisYear } from './thisyear';

import { SessionService } from './session.service';

import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
  	selector: 'my-sessions',
  	templateUrl: 'sessions.component.html',
  	styleUrls: [ 'sessions.component.css' ]
})


export class SessionsComponent implements OnInit {
	// title = 'EastBrook Mall Santa Set 2016';
	sessionDay: LastYear[];
	today: number = Date.now();
	selectedSession: LastYear;

	thisSessionDay: ThisYear[];
	thisSelectedSession: ThisYear;

	constructor(
		private router: Router,
		private sessionService: SessionService) { }

	getSessions(): void {
    	this.sessionService.getSessions().then(sessionDay => this.sessionDay = sessionDay);

  	}

  	getSessionsNow(): void {
    	this.sessionService.getSessionsNow().then(thisSessionDay => this.thisSessionDay = thisSessionDay);

  	}

	ngOnInit(): void {
		this.getSessionsNow();
  	}

  	onSelect(session: ThisYear): void {
	  this.thisSelectedSession = session;
	  this.gotoDetail();

	}

	gotoDetail(): void {
 		this.router.navigate(['/detail', this.thisSelectedSession.day]);

	}

	daysSince(): number {
 		var date = new Date();
 		var day = date.getDate() + 6;
       	return day;
 	}
}


