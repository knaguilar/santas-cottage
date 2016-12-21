import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LastYear } from './lastyear';
import { ThisYear } from './thisyear';

import { SANTADAYS } from './mock-sessions';
import { SANTA16 } from './mock-sessions';

@Injectable()
export class SessionService {
	private sessionsUrl = 'api/sessions';  // URL to web api

  	constructor(private http: Http) { }

	getSessions(): Promise<LastYear[]> {
		return Promise.resolve(SANTADAYS);
	}

	getSessionsNow(): Promise<ThisYear[]> {
		return Promise.resolve(SANTA16);
	}

	getSession(id: number): Promise<LastYear> {
  		return this.getSessions()
             .then(session => session.find(session => session.day === id));
	}

	getThisSession(id: number): Promise<ThisYear> {
  		return this.getSessionsNow()
             .then(thisSession => thisSession.find(thisSession => thisSession.day === id));
	}
}
