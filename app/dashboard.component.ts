import { Component, OnInit } from '@angular/core';

import { LastYear} from './lastyear';

import { SessionService } from './session.service';

@Component({
	moduleId: module.id,
  	selector: 'my-dashboard',
  	templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
	sessionDay: LastYear[] = [];

  	constructor(private sessionService: SessionService) { }

  	highSales(value): void {
	  return value >= 900;
	}
	ngOnInit(): void {
		this.sessionService.getSessions().then(sessionDay => this.sessionDay = sessionDay;
  	}
}
