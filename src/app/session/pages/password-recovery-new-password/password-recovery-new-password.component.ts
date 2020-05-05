import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password-recovery-new-password',
  templateUrl: './password-recovery-new-password.component.html',
  styleUrls: ['./password-recovery-new-password.component.scss']
})
export class PasswordRecoveryNewPasswordComponent implements OnInit {

  public passwordForm: FormGroup;
  public token: string;
  public url: string = environment.url;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: [''],
      confirmedPassword: ['', [this.matchValidator.bind(this)]]
    });
    this.token = this.route.snapshot.queryParamMap.get('token');
    console.log('Tokenul=');
    console.log(this.token);
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
    /*const header: HttpHeaders = new HttpHeaders();
    header.set('Authorization', `Bearer${this.token}`);*/
    const header = new HttpHeaders({Authorization : `Bearer ${this.token}`});
    this.http.post(this.url + '/users/reset_password', {password: this.password.value}, {headers: header}).subscribe(
      data => {
        console.log('Totu bine!');
        console.log(data);
      },
      err => {
        console.log('A avut loc o eroare!');
        console.log(err);
      }

    );
  }

}
