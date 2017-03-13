import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'new-api',
  templateUrl: 'app/components/apis/apis.new.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class NewApiComponent {
  constructor(private _router: Router, private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
  }

  createApp(event, apiName, appName, response, endPoint) {
    event.preventDefault();
    let params = {
      "mock_api": {
        "title": apiName,
        "app": appName,
        "api_response": response,
        "end_point": endPoint
      }
    }
    this._appsService.createApi(params).subscribe(
      response => {
        if(response.success) {
          this._router.navigate(['/apis']);
        }
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }
}
