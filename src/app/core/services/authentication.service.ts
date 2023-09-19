import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoginCardView = true;

  constructor() {}

  setIsLoginCardView(bool: boolean) {
    this.isLoginCardView = bool;
  }

  getIsLoginCardView() {
    return this.isLoginCardView;
  }
}
