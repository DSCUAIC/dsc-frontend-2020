import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginResponse,
  ILoginPayload,
  IRegisterPayload,
  IRegisterResponse,
  IForgotPayload,
  IForgotResponse,
  IResetPasswordPayLoad,
  IResetPasswordResponse,
  IValidate,
} from '../models';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  public login(payload: ILoginPayload): Observable<ILoginResponse> {
    return this.http.post<any>(`${environment.url}/auth/login`, payload);
  }

  public checkAccount(token: string): Observable<any> {
    return this.http.patch<any>(`${environment.url}/post`, {token});
  }

  public register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(this.url + '/auth/register', payload);
  }

  public forgot(payload: IForgotPayload): Observable<IForgotResponse> {
    return this.http.post<IForgotResponse>(`${this.url}/auth/forgot_password`, {email: payload.email});
  }

  public resetPassword(payload: IResetPasswordPayLoad): Observable<IResetPasswordResponse> {
    const header = new HttpHeaders({Authorization : `Bearer ${payload.token}`});
    return this.http.post<IResetPasswordResponse>(
      this.url + '/users/reset_password',
      { password: payload.password },
      { headers: header }
    );
  }

  public validate(payload: IValidate): Observable<any> {
    return this.http.post<{ token: string }>(this.url + '/auth/validate', payload).pipe(
      tap(response => {
        console.log(response);
        localStorage.setItem('token', response.token);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
