import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent {
  @Input() isLoginCardView!: boolean;
}
