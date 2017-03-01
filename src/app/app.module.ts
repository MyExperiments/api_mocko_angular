import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { RouterComponent }  from './components/router/router.component';
import { RegisterComponent }  from './components/register/register.component';
import { LoginComponent }  from './components/login/login.component';
import { HomeComponent }  from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppComponent }  from './components/apps/apps.component';
import { NewAppComponent }  from './components/apps/apps.new.component';
import { HeaderComponent } from './components/header/header.component';

import { ApiExceptionService } from './services/api-exception.service';
import { HttpClientService } from './services/http-client.service';
import { AuthenticationService } from './services/users/authentication.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'apps', component: AppComponent },
  { path: 'apps/new', component: NewAppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  	BrowserModule,
  	HttpModule
  ],
  declarations: [
  	RouterComponent, HeaderComponent, SidebarComponent, RegisterComponent, LoginComponent, HomeComponent, AppComponent, NewAppComponent
  ],
  bootstrap: [ RouterComponent, HeaderComponent, SidebarComponent ],
  providers: [
    HttpClientService, ApiExceptionService, AuthenticationService
  ]
})

export class AppModule { }
