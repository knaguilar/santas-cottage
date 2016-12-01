import { Injectable } from '@angular/core';
import { LastYear } from './lastyear';

import { SANTADAYS } from './mock-sessions';

@Injectable()
export class SessionService {
	getSessions(): Promise<LastYear[]> {
		return Promise.resolve(SANTADAYS);
	}
}
