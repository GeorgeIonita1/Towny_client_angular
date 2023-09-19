import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-authentication-card',
  templateUrl: './authentication-card.component.html',
  styleUrls: ['./authentication-card.component.css']
})
export class AuthenticationCardComponent {
  isLoginCardView;

  constructor(authService: AuthenticationService) {
    this.isLoginCardView = authService.getIsLoginCardView();
  }
}
