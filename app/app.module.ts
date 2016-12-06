import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { SessionDetailComponent } from './session-detail.component';
import { SessionsComponent }     from './sessions.component';
import { SessionService }         from './session.service';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
	  AppRoutingModule
],
  declarations: [
  	AppComponent,
  	DashboardComponent,
  	SessionDetailComponent,
  	SessionsComponent
  ],
  providers: [
  	SessionService
  ],
  bootstrap: [
  	AppComponent
  ]
})


export class AppModule { }
