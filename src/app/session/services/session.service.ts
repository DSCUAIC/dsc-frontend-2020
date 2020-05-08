import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginResponse,
  ILoginPayload,
  IRegisterPayload,
  IRegisterResponse,
  IForgotPayload,
  TokenPair,
  IForgotResponse,
  IResetPasswordPayLoad,
  IResetPasswordResponse
} from '../models';
import { environment, config } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  public login(payload: ILoginPayload): Observable<ILoginResponse> {
    return this.http.post<any>(`${config.apiUrl}/auth/login`, payload);
  }

  public checkAccount(token: string): Observable<any> {
    return this.http.patch<any>(`${config.apiUrl}/post`, {token});
  }

  public register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(this.url + '/auth/register', payload);
  }

  public forgot(payload: IForgotPayload): Observable<IForgotResponse> {
    return this.http.post<IForgotResponse>(`${this.url}/auth/forgot_password`, {email: payload.email});
  }

  public resetPassword(payload: IResetPasswordPayLoad): Observable<IResetPasswordResponse> {
    const header = new HttpHeaders({Authorization : `Bearer ${payload.token}`});
    return this.http.post<IResetPasswordResponse>(this.url + '/users/reset_password', {password: payload.password}, {headers: header});
  }
  public logout(): void {
    localStorage.removeItem('token');
  }
}
