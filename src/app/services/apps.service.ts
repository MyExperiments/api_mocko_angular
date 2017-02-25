import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { HttpClientService } from './http-client.service';

@Injectable()
export class AppsService {
  constructor(private _httpClientService: HttpClientService) {
    this._httpClientService = _httpClientService
  }

  getApps() {
    return this._httpClientService.get('http://localhost:4000/frontend/api/apps.json', true)
    .map((response: Response) => {
      return response.json();
    });
  }
}