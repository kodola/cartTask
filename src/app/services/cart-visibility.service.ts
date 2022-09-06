import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartVisibilityService {
  subject = new Subject();

  constructor() {}

  sendVariable(bool: boolean) {
    this.subject.next(bool);
  }

  getVariable() {
    return this.subject.asObservable();
  }
}
