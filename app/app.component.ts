import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-sessions></my-sessions>
  `
})
export class AppComponent {
	title = 'EastBrook Mall Santa Set 2016';
}