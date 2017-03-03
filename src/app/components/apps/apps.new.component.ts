import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'new-app',
  templateUrl: 'app/components/apps/apps.new.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class NewAppComponent {
  constructor(private _router: Router, private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
  }

  createApp(event, appName) {
    event.preventDefault();
    let params = {
      "app": {
        "title": appName
      }
    }
    this._appsService.createApp(params).subscribe(
      response => {
        if(response.success) {
          this._router.navigate(['/apps']);
        }
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }
}
