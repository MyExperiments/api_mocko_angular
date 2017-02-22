import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './components/home/home.component';
import { RegisterComponent }  from './components/register/register.component';
import { LoginComponent }  from './components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ HomeComponent, RegisterComponent, LoginComponent  ],
  bootstrap:    [ HomeComponent ]
})

export class AppModule {

}
