import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/users/authentication.service';
import { ApiExceptionService } from '../../services/api-exception.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login-form.component.html',
  providers: [ AuthenticationService, ApiExceptionService ]
})

export class LoginComponent  {

  constructor(private _authenticationService: AuthenticationService, private _apiExceptionService: ApiExceptionService, private router: Router) {
    this._authenticationService = _authenticationService;
    this._apiExceptionService = _apiExceptionService;
    this.router = router;
  }

  login(event, email, password) {
    event.preventDefault();
    this._authenticationService.login(email, password).subscribe(
      response => {
        if (response && response.authentication_token.length > 0) {
          // store current user details in localstorage
          this._authenticationService.setCurrentUser(response);
          this.router.navigate(['/apis']);
        }
      },
      error => {
        this._apiExceptionService.catch(error);
      });
  }
}