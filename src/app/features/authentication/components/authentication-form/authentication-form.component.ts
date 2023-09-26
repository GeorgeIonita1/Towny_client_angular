import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/features/users/services/users.service';
import { formAuthValidation } from 'src/app/shared/directives/form-auth-validation.directive';

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
      email: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    }, { validators: formAuthValidation })
  }

  get email() { return this.authenticationForm.get('email'); }
  get password() { return this.authenticationForm.get('password'); }
  get passwordConfirm() { return this.authenticationForm.get('passwordConfirm'); }

  onSubmit() {
    this.usersService.registerUser(this.email?.value, this.password?.value)
  }
}
