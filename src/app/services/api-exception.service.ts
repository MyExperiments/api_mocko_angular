import { Injectable } from '@angular/core';

@Injectable()
export class ApiExceptionService {
  constructor() { }

  catchException(response: any) {
    if (response.status == 401) {
      // Unauthorized Access
    }
  }
}