import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './users/authentication.service';

@Injectable()
export class ApiExceptionService {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    this._router = _router;
    this._authenticationService = _authenticationService;
  }

  catch(response: any) {
    // Unauthorized Access - status code 401
    var body = JSON.parse(response._body);
    if (response.status == 401) {
      this._authenticationService.removeCurrentUser();
      this._router.navigate(['/login']);
    }
  }
}