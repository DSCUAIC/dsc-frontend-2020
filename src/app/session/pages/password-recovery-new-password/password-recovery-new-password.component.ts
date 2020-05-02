import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-recovery-new-password',
  templateUrl: './password-recovery-new-password.component.html',
  styleUrls: ['./password-recovery-new-password.component.scss']
})
export class PasswordRecoveryNewPasswordComponent implements OnInit {

  public passwordForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: [''],
      confirmedPassword: ['', [this.matchValidator.bind(this)]]
    });
  }

  matchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmedPasswordValue = control.value;

    if (this.passwordForm) {
      const passwordValue = this.password.value;

      if (confirmedPasswordValue && passwordValue && confirmedPasswordValue !== passwordValue) {
        return { fieldMatch: true };
      }
    }

    return null;
  }

  get password() {
    return this.passwordForm.get('password');
  }

  get confirmedPassword() {
    return this.passwordForm.get('confirmedPassword');
  }

  submit() {
  }

}
