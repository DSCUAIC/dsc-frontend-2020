import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { Subscription } from 'rxjs';
import { TimeTableService } from 'src/app/timetable/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  public status: string;
  private subscription$: Subscription = new Subscription();

  registerForm: FormGroup;

  errorMessages = {
    firstName: [{ type: 'required', message: 'First Name is required' }],
    lastName: [{ type: 'required', message: 'Last Name is required' }],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' },
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'invalid', message: 'Password mismatch' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Please enter a password that is least 6 characters long',
      },
    ],
  };

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private timeTableService: TimeTableService
  ) {
    this.timeTableService.sendMessage('Sign up');
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: '',
      },
      { validator: this.passwordValidator.bind(this) }
    );

    this.registerForm.statusChanges.subscribe(() => {
      console.log(this.registerForm.errors);
    });
  }

  passwordValidator(control: AbstractControl): { invalid: boolean } | null {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');

    if (password.value === confirm.value) {
      return null;
    }

    confirm.setErrors({ invalid: true });

    return { invalid: true };
  }

  save() {
    const accountObject = {
      firstname: this.formValue.firstName,
      lastname: this.formValue.lastName,
      password: this.formValue.password,
      email: this.formValue.email,
    };

    this.sessionService.register(accountObject).subscribe(() => {
      this.status = 'Account created. Check email for activation!';
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  get formValue() {
    return this.registerForm.value;
  }
}
