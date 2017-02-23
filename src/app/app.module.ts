import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { RegisterComponent }  from './components/register/register.component';
import { LoginComponent }  from './components/login/login.component';
import { LoginRegisterLinksComponent } from './components/login/login-register-links.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports:      [
    RouterModule.forRoot(appRoutes),
  	BrowserModule,
  	HttpModule
  ],
  declarations: [
  	HomeComponent, RegisterComponent, LoginComponent, LoginRegisterLinksComponent
  ],
  bootstrap:    [ HomeComponent, LoginRegisterLinksComponent ]
})

export class AppModule { }
