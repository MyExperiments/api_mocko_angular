import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CsrfService {
  constructor(private http: Http) { }

  setCsrfTokens() {
    return this.http.get('http://localhost:4000/frontend/api/csrf_tokens.json')
      .map((response: Response) => {
        alert(1);
      });
  }
}