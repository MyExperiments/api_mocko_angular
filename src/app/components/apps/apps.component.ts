import { Component } from '@angular/core';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'apps',
  templateUrl: 'app/components/apps/apps.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class AppComponent  {
  constructor(private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
    this._appsService.getApps().subscribe(
      response => {
        this.apps = response.apps;
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }
}
