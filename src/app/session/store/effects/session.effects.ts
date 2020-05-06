import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import {
  SessionLoginRequest,
  SessionLoginSuccess,
  SessionLoginFailure,
} from '../actions';
import { Injectable } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(SessionLoginRequest),
    mergeMap((action) => this.sessionService.login(action.payload).pipe(
      map((response) => SessionLoginSuccess({ payload: response })),
      catchError((error) => of(SessionLoginFailure({ error })))
    ))
  ));

  @Effect({ dispatch: false })
  LoginSuccess: Observable<any> = this.actions$.pipe(
    ofType(SessionLoginSuccess),
    tap((data) => {
      localStorage.setItem('token', data.payload.token);
      this.router.navigateByUrl('/');
    })
  )

  @Effect({ dispatch: false })
  LoginFailure: Observable<any> = this.actions$.pipe(
    ofType(SessionLoginFailure),
    tap(() => {
      this.router.navigateByUrl('/login');
    })
  )

  constructor(
    private router: Router,
    private actions$: Actions,
    private sessionService: SessionService
  ) {}
}
