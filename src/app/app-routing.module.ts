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
      }
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
