import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SessionDetailComponent } from './session-detail.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SessionDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
