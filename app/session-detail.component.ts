import { Component, Input } from '@angular/core';
import { LastYear } from './lastyear';

@Component({
  selector: 'my-session-detail',
  template: `
		<div *ngIf="session">
			<h3>{{session.date}}</h3>
			<p>Guests: {{session.guests}}</p>
			<p>Total: {{session.total | currency:"USD":true}}</p>
		</div>
	`
})
export class SessionDetailComponent {
	@Input()
	session: LastYear;
}
