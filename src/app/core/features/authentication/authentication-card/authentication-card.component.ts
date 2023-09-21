import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-card',
  templateUrl: './authentication-card.component.html',
  styleUrls: ['./authentication-card.component.css']
})
export class AuthenticationCardComponent {
  @Input() isLoginMode: boolean | undefined;
}
