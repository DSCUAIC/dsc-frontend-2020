import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {

  message = 'We\'ll send you a code you can use to log in.';

  constructor(
    private services: SessionService,
    private router: Router,
  ) {}

  public email = new FormControl('', [Validators.email, Validators.required]);

  submit() {
    this.services.forgot({
      email: this.email.value
    }).subscribe(response => console.log());
    this.message = 'Your code is on its way. Check your inbox!';
  }

  goToPassword() {
    this.router.navigateByUrl('/auth/login');
  }
}
