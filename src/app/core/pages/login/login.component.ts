import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent {
  constructor(private authService: AuthenticationService) {
    this.authService.setIsLoginCardView(true);
  }
}
