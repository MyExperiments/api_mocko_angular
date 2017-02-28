import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/users/authentication.service';

@Component({
  selector: 'header-component',
  templateUrl: 'app/components/header/header.component.html',
  providers: [ AuthenticationService ]
})

export class HeaderComponent  {
  private isSignedIn = false;
  private currentUser;
  constructor(private _authenticationService: AuthenticationService) {
    this._authenticationService = _authenticationService;
    this.isSignedIn = this._authenticationService.isSignedIn();
    this.currentUser = this._authenticationService.getCurrentUser();
  }
}