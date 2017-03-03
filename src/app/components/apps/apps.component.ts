import { Component } from '@angular/core';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

import { DataFilterPipe } from '../../pipes/data-filter.pipe';

@Component({
  selector: 'apps',
   pipes: [ DataFilterPipe ],
  templateUrl: 'app/components/apps/apps.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class AppComponent  {
  private apps: any, allApps: any;
  private rowsOnPage = 5;
  private sortBy = 'title';
  private sortOrder = 'asc';
  private titleFilter: string;
  private tokenFilter: string;

  constructor(private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
    this._appsService.getApps().subscribe(
      response => {
        this.apps = response.apps;
        this.allApps = this.apps;
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }

  filter(event) {
    let filterPipe = new DataFilterPipe();
    this.apps = this.allApps;
    if (this.titleFilter) {
      this.apps = filterPipe.transform(this.apps, this.titleFilter, 'title');
    }
    if (this.tokenFilter) {
      this.apps = filterPipe.transform(this.apps, this.tokenFilter, 'app_token');
    }
  }
}
