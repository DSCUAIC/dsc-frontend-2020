import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-password-recovery-new-password',
  templateUrl: './password-recovery-new-password.component.html',
  styleUrls: ['./password-recovery-new-password.component.scss']
})
export class PasswordRecoveryNewPasswordComponent implements OnInit {

  public passwordForm: FormGroup;
  public token: string;
  public url: string = environment.url;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: SessionService
  ) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: [''],
      confirmedPassword: ['', [this.matchValidator.bind(this)]]
    });
    this.token = this.route.snapshot.queryParamMap.get('token');
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
    this.service.resetPassword({
      password: this.password.value,
      token: this.token
    }).subscribe(() => this.router.navigate(['/auth/login']));
  }

}
