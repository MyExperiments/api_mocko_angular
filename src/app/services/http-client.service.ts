import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthenticationService } from './users/authentication.service';

@Injectable()
export class HttpClientService {
  constructor(private http: Http, private _authenticationService: AuthenticationService) {
    this._authenticationService = _authenticationService;
    this.http = http;
  }

  authorizationHeader(headers: Headers) {
    let currentUser = this._authenticationService.getCurrentUser();
    headers.append('X-User-Token', currentUser.authentication_token);
    headers.append('X-User-Email', currentUser.email);
  }

  get(url: string, withAuthHeader: boolean) {
    if(withAuthHeader) {
      let headers = new Headers();
      this.authorizationHeader(headers);
      return this.http.get(url, {
        headers: headers
      });
    }
    else {
      return this.http.get(url);
    }
  }

  post(url: string, data: any, withAuthHeader: boolean) {
    if(withAuthHeader) {
      let headers = new Headers();
      this.authorizationHeader(headers);
      return this.http.post(url, data, {
        headers: headers
      });
    }
    else {
      return this.http.post(url, data);
    }
  }
}