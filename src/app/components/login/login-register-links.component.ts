import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/users/authentication.service';

@Component({
  selector: 'login-register-links',
  templateUrl: 'app/components/login/login-register.component.html',
  providers: [ AuthenticationService ]
})

export class LoginRegisterLinksComponent  {
  private isSignedIn = false;
  private _authenticationService;
  private currentUser;
  constructor(private _authenticationService: AuthenticationService) {
    this._authenticationService = _authenticationService;
    this.isSignedIn = this._authenticationService.isSignedIn();
    this.currentUser = this._authenticationService.getCurrentUser();
  }
}