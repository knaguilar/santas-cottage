import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let sessions = [
      { day: 1, date: 'Friday, November 27, 2015', total: 315.85, guests: 17},
      { day: 2, date: 'Saturday, November 28, 2015', total: 506.79, guests: 22},
      { day: 3, date: 'Sunday, November 29, 2015', total: 259.90, guests: 11},
      { day: 4, date: 'Monday, November 30, 2015', total: 80.97, guests: 3},
      { day: 5, date: 'Tuesday, December 1, 2015', total: 107.96, guests: 5},
      { day: 6, date: 'Wednesday, December 2, 2015', total: 177.92, guests: 6},
      { day: 7, date: 'Thursday, December 3, 2015', total: 123.94, guests: 4},
      { day: 8, date: 'Friday, December 4, 2015', total: 202.91, guests: 10},
      { day: 9, date: 'Saturday, December 5, 2015', total: 716.69, guests: 34},
      { day: 10, date: 'Sunday, December 6, 2015', total: 932.63, guests: 40},
      { day: 11, date: 'Monday, December 7, 2015', total: 124.95, guests: 6},
      { day: 12, date: 'Tuesday, December 8, 2015', total: 557.76, guests: 26},
      { day: 13, date: 'Wednesday, December 9, 2015', total: 408.83, guests: 18},
      { day: 14, date: 'Thursday, December 10, 2015', total: 230.90, guests: 11},
      { day: 15, date: 'Friday, December 11, 2015', total: 540.80, guests: 22},
      { day: 16, date: 'Saturday, December 12, 2015', total: 1348.44, guests: 57},
      { day: 17, date: 'Sunday, December 13, 2015', total: 1360.43, guests: 55},
      { day: 18, date: 'Monday, December 14, 2015', total: 247.94, guests: 12},
      { day: 19, date: 'Tuesday, December 15, 2015', total: 453.82, guests: 17},
      { day: 20, date: 'Wednesday, December 16, 2015', total: 563.78, guests: 22},
      { day: 21, date: 'Thursday, December 17, 2015', total: 313.88, guests: 14},
      { day: 22, date: 'Friday, December 18, 2015', total: 641.73, guests: 27},
      { day: 23, date: 'Saturday, December 19, 2015', total: 1536.36, guests: 66},
      { day: 24, date: 'Sunday, December 20, 2015', total: 1708.26, guests: 68},
      { day: 25, date: 'Monday, December 21, 2015', total: 673.67, guests: 27},
      { day: 26, date: 'Tuesday, December 22, 2015', total: 908.63, guests: 36},
      { day: 27, date: 'Wednesday, December 23, 2015', total: 1135.48, guests: 42},
      { day: 28, date: 'Thursday, December 24, 2015', total: 1413.42, guests: 60}
    ];
    return {sessions};
  }
}
