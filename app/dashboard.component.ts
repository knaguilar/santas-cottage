import { Component, OnInit } from '@angular/core';

import { LastYear } from './lastyear';

import { SessionService } from './session.service';

@Component({
	moduleId: module.id,
  	selector: 'my-dashboard',
  	templateUrl: 'dashboard.component.html',
  	styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	sessionDay: LastYear[] = [];
	sessionNow: LastYear[] = [];

  	constructor(private sessionService: SessionService) { }

  	highSales(value: number): boolean {
	  return value >= 400;
	}
	ngOnInit(): void {
		this.sessionService.getSessions().then(sessionDay => this.sessionDay = sessionDay);
		this.sessionService.getSessionsNow().then(sessionNow => this.sessionNow = sessionNow);
  	}
}
