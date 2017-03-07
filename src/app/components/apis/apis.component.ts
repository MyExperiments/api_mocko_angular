import { Component } from '@angular/core';

import { AppsService } from '../../services/apps.service';
import { ApiExceptionService } from '../../services/api-exception.service';
import { HttpClientService } from '../../services/http-client.service';

import { DataFilterPipe } from '../../pipes/data-filter.pipe';

@Component({
  selector: 'apis',
  templateUrl: 'app/components/apis/apis.component.html',
  providers: [ AppsService, ApiExceptionService, HttpClientService ]
})

export class ApiComponent  {
  private apis: any
  private allApis: any;
  private rowsOnPage = 5;
  private sortBy = 'title';
  private sortOrder = 'asc';
  private titleFilter: string;
  private tokenFilter: string;

  constructor(private _appsService: AppsService, private _apiExceptionService: ApiExceptionService) {
    this._appsService = _appsService;
    this._apiExceptionService = _apiExceptionService;
    this._appsService.getApis().subscribe(
      response => {
        console.log(response);
        this.apis = response.apis;
        this.allApis = this.apis;
      },
      error => {
        this._apiExceptionService.catch(error);
      }
    );
  }

  filter(event) {
    let filterPipe = new DataFilterPipe();
    this.apis = this.allApis;
    if (this.titleFilter) {
      this.apis = filterPipe.transform(this.apis, this.titleFilter, 'title');
    }
    if (this.tokenFilter) {
      this.apis = filterPipe.transform(this.apis, this.tokenFilter, 'api_token');
    }
  }
}
