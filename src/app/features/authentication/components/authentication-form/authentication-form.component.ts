import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/features/users/services/users.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent {
  authenticationForm!: FormGroup;

  @Input() isLoginMode: boolean | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.authenticationForm = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  get email() { return this.authenticationForm.get('email'); }
  get password() { return this.authenticationForm.get('password'); }
  get passwordConfirm() { return this.authenticationForm.get('passwordConfirm'); }


  onSubmit() {
    console.log('sdfhdh')
  }
}
