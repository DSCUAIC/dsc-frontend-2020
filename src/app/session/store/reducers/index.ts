import { createReducer, Action } from '@ngrx/store';

import { sessionInitialState } from './state/initial-state';
import { ISessionState } from './state/state.model';

import { sessionLoginReducers } from './login.reducers';

const sessionReducers = createReducer(
  sessionInitialState,
  ...sessionLoginReducers,
);

export function sessionReducer(state: ISessionState, action: Action) {
  return sessionReducers(state, action);
}
