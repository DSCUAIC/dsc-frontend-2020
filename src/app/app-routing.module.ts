import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';
import {
  RegisterComponent,
  LoginComponent,
  PasswordRecoveryComponent,
  PasswordRecoveryTwoComponent,
  PasswordRecoveryNewPasswordComponent
} from './session/pages';
import { NonAuthGuardService } from './session/services/nonauth-guard.service';
import { AuthGuardService } from './session/services/auth-guard.service';
import { CheckingAccountComponent } from './session/pages/checking-account/checking-account.component';
import { TroubleshootingComponent } from './session/pages/troubleshooting/troubleshooting.component';
import { WelcomePageComponent } from './core/pages';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        component: TimeTableComponent,
      }
    ]
  },
  {
    path: 'auth',
    canActivateChild: [NonAuthGuardService],
    children: [
      {
        path: '',
        component: WelcomePageComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgotpassword2',
        component: PasswordRecoveryTwoComponent,
        /* canActivate: [NonAuthGuard] */
      },
      {
        path: 'checkingaccount',
        component: CheckingAccountComponent
      },
      {
        path: 'troubleshoot',
        component: TroubleshootingComponent
      },
      {
        path: 'forgot',
        component: PasswordRecoveryComponent
      },
      {
        path: 'check-code',
        component: PasswordRecoveryTwoComponent
      },
      {
        path: 'resetPassword',
        component: PasswordRecoveryNewPasswordComponent
      },
      {
        path: 'verification',
        component: CheckingAccountComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '' // TODO make a 404 page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
