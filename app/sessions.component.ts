import { Component, OnInit } from '@angular/core';

import { LastYear} from './lastyear';

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

	constructor(
		private router: Router,
		private sessionService: SessionService) { }

	getSessions(): void {
    	this.sessionService.getSessions().then(sessionDay => this.sessionDay = sessionDay);

  	}

	ngOnInit(): void {
		this.getSessions();
  	}

  	onSelect(session: LastYear): void {
	  this.selectedSession = session;
	}

	gotoDetail(): void {
 		this.router.navigate(['/detail', this.selectedSession.day]);
	}
}


