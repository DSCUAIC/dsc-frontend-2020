import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
  public email = new FormControl('', [Validators.email, Validators.required]);

  submit() {
    // call to api
  }

  goToPassword() {
    // implement logic
  }
}
