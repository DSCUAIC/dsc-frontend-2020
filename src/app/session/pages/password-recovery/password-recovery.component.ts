import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {

  message = 'We\'ll send you a code you can use to log in.';

  constructor(private services: SessionService, private router: Router, private http: HttpClient) {}

  public email = new FormControl('', [Validators.email, Validators.required]);


  submit() {
      this.services.forgot({email: this.email.value}).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
      this.message = 'Your code is on its way. Check your inbox!';
  }

  goToPassword() {
      this.router.navigateByUrl('/auth/login');
  }
}
