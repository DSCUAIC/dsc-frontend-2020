import { NgModule } from '@angular/core';
import {
  LoginComponent,
  RegisterComponent,
  ForgotComponent,
  LogoutComponent
} from './pages';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { sessionEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { sessionReducer } from './store/reducers';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { MaterialModule } from '../material.module';
import { PasswordRecoveryTwoComponent } from './pages/password-recovery-two/password-recovery-two.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PasswordRecoveryNewPasswordComponent } from './pages/password-recovery-new-password/password-recovery-new-password.component';
import { RouterModule } from '@angular/router';
import { ValidationComponent } from './pages/validation/validation.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LogoutComponent,
    PasswordRecoveryComponent,
    PasswordRecoveryTwoComponent,
    PasswordRecoveryNewPasswordComponent,
    ValidationComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    EffectsModule.forFeature(sessionEffects),
    StoreModule.forFeature('session', sessionReducer),
  ],
  exports: [
    ForgotComponent,
    LoginComponent,
    PasswordRecoveryComponent,
    PasswordRecoveryTwoComponent,
  ],
  providers: [
    ...sessionEffects,
    AuthGuardService,
  ]
})
export class SessionModule { }
