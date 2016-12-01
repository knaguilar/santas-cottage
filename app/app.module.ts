import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { SessionDetailComponent } from './session-detail.component';
import { SessionsComponent }     from './sessions.component';
import { SessionService }         from './session.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SessionDetailComponent, SessionsComponent ],
  providers: [ SessionService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
