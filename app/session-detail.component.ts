import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { SessionService } from './session.service';


import { LastYear } from './lastyear';

@Component({
	moduleId: module.id,
  	selector: 'my-session-detail',
  	templateUrl: 'session-detail.component.html',
})

export class SessionDetailComponent implements OnInit {
	@Input() session: LastYear;

	constructor(
		private sessionService: SessionService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params
		.switchMap((params: Params) => this.sessionService.getSession(+params['day']))
		.subscribe(session => this.session = session);
	}

	goBack(): void {
	  this.location.back();
	}


}
