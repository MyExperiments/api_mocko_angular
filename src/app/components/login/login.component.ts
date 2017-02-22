import { Component } from '@angular/core';

import { LoginService } from '../../services/users/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login-form.component.html',
   providers: [ LoginService ]
})

export class LoginComponent  {

  constructor(private _loginService: LoginService) {
    this._loginService = _loginService;
  }

  login(event, email, password) {
    event.preventDefault();
    this._loginService.login(email, password).subscribe(
      data => {
          console.log(data)
      },
      error => {

      });
  }
}