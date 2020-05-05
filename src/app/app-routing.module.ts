import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';
import { RegisterComponent, LoginComponent } from './session/pages';
import {
  NonauthGuardService as NonAuthGuard
} from './session/services/nonauth-guard.service';
import { PasswordRecoveryTwoComponent } from './session/pages/password-recovery-two/password-recovery-two.component';
import { AuthGuardService } from './session/services/auth-guard.service';
import { CheckingAccountComponent } from './session/pages/checking-account/checking-account.component';
import { TroubleshootingComponent } from './session/pages/troubleshooting/troubleshooting.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TimeTableComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'forgotpassword2',
        component: PasswordRecoveryTwoComponent,
        /* canActivate: [NonAuthGuard] */
      },
      {
        path: 'checkingaccount',
        component: CheckingAccountComponent,
      },
      {
        path: 'troubleshoot',
        component: TroubleshootingComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
