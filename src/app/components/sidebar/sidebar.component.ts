import { Component } from '@angular/core';

import { AuthenticationService } from '../../services/users/authentication.service'

@Component({
  selector: 'sidebar',
  templateUrl: 'app/components/sidebar/sidebar.component.html',
  providers: [ AuthenticationService ]
})

export class SidebarComponent  {
  private _authenticationService: AuthenticationService;
  private isSignedIn = false;
  constructor(_authenticationService: AuthenticationService) {
    this._authenticationService = _authenticationService;
    this.isSignedIn = this._authenticationService.isSignedIn();
  }
}