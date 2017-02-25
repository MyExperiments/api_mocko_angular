import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { RouterComponent }  from './components/router/router.component';
import { RegisterComponent }  from './components/register/register.component';
import { LoginComponent }  from './components/login/login.component';
import { HomeComponent }  from './components/home/home.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { LoginRegisterLinksComponent } from './components/login/login-register-links.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  	BrowserModule,
  	HttpModule
  ],
  declarations: [
  	RouterComponent, RegisterComponent, LoginComponent, LoginRegisterLinksComponent,
    HomeComponent, DashboardComponent
  ],
  bootstrap: [ RouterComponent, LoginRegisterLinksComponent ]
})

export class AppModule { }
