import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/users/authentication.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login-form.component.html',
  providers: [ AuthenticationService ]
})

export class LoginComponent  {

  constructor(private _authenticationService: AuthenticationService, private router: Router) {
    this._authenticationService = _authenticationService;
    this.router = router;
  }

  login(event, email, password) {
    event.preventDefault();
    this._authenticationService.login(email, password).subscribe(
      response => {
        if (response && response.authentication_token) {
          // store current user details in localstorage
          this._authenticationService.setCurrentUser(response);
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        this._authenticationService.handleLoginError(error);
      });
  }
}