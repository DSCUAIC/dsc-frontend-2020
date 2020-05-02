import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISessionState } from './reducers/state/state.model';

const sessionSelector = createFeatureSelector('session');

// Login Selectors
export const sessionLoginLoadingSelector = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.loading
);
export const sessionLoginDataSelector = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.data
);
export const sessionLoginErrorSelector = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.error
);
