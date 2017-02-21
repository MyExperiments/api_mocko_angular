import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:4000/users/sign_in.json', JSON.stringify({ user: { email: email, password: password } }))
      .map((response: Response) => {
        alert(2);
        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log(user);
      });
  }
}