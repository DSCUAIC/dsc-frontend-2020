import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();

  registerForm: FormGroup;

  errorMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'passwordValidator', message: 'Password mismatch' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Please enter a password that is least 6 characters long' }
    ]
  };

  constructor(private fb: FormBuilder, private sessionService: SessionService) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ''
      },
      { validator: this.passwordValidator.bind(this) }
    );
  }

  ngOnInit(): void {
    const sub = this.sessionService.register(null).subscribe((response) => {
      console.log(response);
    });

    this.subscription$.add(sub);
  }

  passwordValidator(control: AbstractControl) {
    return control.get('password').value ===
      control.get('confirmPassword').value
      ? null
      : { invalid: true };
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
