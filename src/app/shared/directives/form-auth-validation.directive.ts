import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

// password fileds must match
export const formAuthValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  return password && passwordConfirm && password.value !== passwordConfirm.value ? { filedsNotMatch: true } : null;
};

@Directive({
  selector: '[appFormAuthValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FormAuthValidationDirective, multi: true }]
})
export class FormAuthValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return formAuthValidation(control);
  }
}
