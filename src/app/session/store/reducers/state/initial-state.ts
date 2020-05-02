import { ISessionState } from './state.model';

export const sessionInitialState: ISessionState = {
  login: {
    loading: false,
    data: null,
    error: null
  }
};
