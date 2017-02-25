import { Component } from '@angular/core';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class DashboardComponent  {
  constructor(private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
    this._appsService.getApps().subscribe(
      response => {
        console.log(response)
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }
}
