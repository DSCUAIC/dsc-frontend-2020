import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginResponse,
  ILoginPayload,
  IRegisterPayload,
  IRegisterResponse,
  IForgotPayload,
  TokenPair,
  IForgotResponse
} from '../models';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';


export const config = {
  apiUrl: 'http://localhost:8080'
}; // asa gasit-am, nu stiu daca e bine


@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private url: string = environment.url;
  private loggedUser: string;
  private readonly JWT_TOKEN= 'JWT_TOKEN';
  private readonly REFRESH_TOKEN= 'REFRESH_TOKEN';
  private response: string = "?";

  constructor(private http: HttpClient) {}

  public login(payload: ILoginPayload): Observable<ILoginResponse> {
    return this.http.post<any>(`${config.apiUrl}/login`, payload)
    .pipe(
      tap(tokens => this.doLoginUser(payload.email, tokens)),
      mapTo({token: this.response}), // nu e eleganta metoda prin care tin minte tokenul, 
      // dar nu am gasit alta solutie ( probabil exista)
      catchError(error => {
        alert(error.error);
        return of({token: null});
      })

    );

  }



  private doLoginUser(username: string, tokens: TokenPair) {

      this.loggedUser = username;
      localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
      localStorage.setItem(this.response, tokens.jwt);
      // localStorage.setItem(this.REFRESH_TOKEN,tokens.refreshToken) 
      // ^ nu sunt sigur daca trebuie
  }


  public checkAccount(token: string): Observable<any> {
    return this.http.patch<any>(`${config.apiUrl}/post`, {token});
  }

  public register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(this.url + '/auth/register', payload);
  }

  public forgot(payload: IForgotPayload): Observable<any> {
    console.log('Email trimis la forgot: ' + payload.email);
    return this.http.post<IForgotResponse>(`${this.url}/auth/forgot_password`, {email: payload.email});
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
