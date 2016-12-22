import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LastYear } from './lastyear';

@Injectable()
export class SessionService {
	private headers = new Headers({'Content-Type': 'application/json'});

	private sessionsUrl = 'api/sessions';  // URL to web api

  	constructor(private http: Http) { }

	getSessions(): Promise<LastYear[]> {
    return this.http.get(this.sessionsUrl)
               .toPromise()
               .then(response => response.json().data as LastYear[])
               .catch(this.handleError);
  	}

	getSession(id: number): Promise<LastYear> {
		return this.getSessions()
             .then(session => session.find(session => session.day === id && session.year === 2015));
	}

	getThisSession(id: number): Promise<LastYear> {
		return this.getSessions()
        	.then(session => session.find(session => session.day === id && session.year === 2016));
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
