import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { DataTableModule } from 'angular2-datatable';

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

import { DataFilterPipe } from './pipes/data-filter.pipe'

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
  	HttpModule,
    FormsModule,
    Ng2PaginationModule,
    DataTableModule
  ],
  declarations: [
  	RouterComponent, HeaderComponent, SidebarComponent, RegisterComponent, LoginComponent, HomeComponent, AppComponent, NewAppComponent,
    // Pipes below
    DataFilterPipe
  ],
  bootstrap: [ RouterComponent, HeaderComponent, SidebarComponent ],
  providers: [
    HttpClientService, ApiExceptionService, AuthenticationService
  ]
})

export class AppModule { }
