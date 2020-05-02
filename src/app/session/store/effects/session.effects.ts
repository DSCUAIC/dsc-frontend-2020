import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  SessionLoginRequest,
  SessionLoginSuccess,
  SessionLoginFailure,
} from '../actions';
import { Injectable } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Injectable()
export class SessionEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(SessionLoginRequest),
    mergeMap((action) => this.sessionService.login(action.payload).pipe(
      map((response) => SessionLoginSuccess({ payload: response })),
      catchError((error) => of(SessionLoginFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private sessionService: SessionService
  ) {}
}
