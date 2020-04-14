import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ISessionState } from '../../store/reducers/state/state.model';
import { SessionLoginRequest } from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<ISessionState>) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', Validators.required],
     });
  }

  onSubmit() {
    const payload = {
      email: this.profileForm.value.email,
      password: this.profileForm.value.password
    }
    this.store.dispatch(SessionLoginRequest({payload}));
  }
}
