import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterPageComponent {
  constructor(private authService: AuthenticationService) {
    this.authService.setIsLoginCardView(false)
  }
}
