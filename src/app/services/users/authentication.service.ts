import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(email: string, password: string) {
    // this.http.get('http://localhost:4000/frontend/api/csrf_tokens.json');
    return this.http.post('http://localhost:4000/users/sign_in.json', { user: { email: email, password: password } })
      .map((response: Response) => {
        return response.json();
      });
  }

  isSignedIn() {
    if (this.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    var currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    } else {
      return {};
    }
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  handleLoginError(response: any) {
    if (response.status == 401) {
      var body = JSON.parse(response._body);
      alert(body.error);
    }
  }
}