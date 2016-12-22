import { Component, OnInit } from '@angular/core';

import { LastYear } from './lastyear';

import { SessionService } from './session.service';

import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
  	selector: 'my-sessions',
  	templateUrl: 'sessions.component.html',
  	styleUrls: [ 'sessions.component.css' ]
})


export class SessionsComponent implements OnInit {
	sessionDay: LastYear[];
	today: number = Date.now();
	selectedSession: LastYear;

	constructor(
		private router: Router,
		private sessionService: SessionService) { }

	getSessions(): void {
    	this.sessionService.getSessions().then(sessionDay => this.sessionDay = sessionDay);

  	}

	ngOnInit(): void {
		this.getSessions();
  	}

  	onSelect(session: ThisYear): void {
	  this.selectedSession = session;
	  this.gotoDetail();

	}

	gotoDetail(): void {
 		this.router.navigate(['/detail', this.selectedSession.day]);

	}

	daysSince(): number {
 		var date = new Date();
 		var day = date.getDate() + 6;
       	return day;
 	}
}


