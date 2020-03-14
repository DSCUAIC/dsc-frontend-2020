import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginResponse,
  ILoginPayload,
  IRegisterPayload,
  IRegisterResponse,
  IForgotPayload,
  TokenPair
} from '../models';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators'


export const config = {
  apiUrl: 'http://localhost:8080'
};//asa gasit-am, nu stiu daca e bine


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url: string = environment.url;
  
  private loggedUser:string;
  private readonly JWT_TOKEN='JWT_TOKEN';
  private readonly REFRESH_TOKEN='REFRESH_TOKEN';
  private response: string ="?";

  constructor(private http: HttpClient) { }
  
  public login(payload: ILoginPayload): Observable<ILoginResponse> {
    
    

    return this.http.post<any>(`${config.apiUrl}/login`,payload)
    .pipe(
      tap(tokens => this.doLoginUser(payload.email,tokens)),
      mapTo({token:this.response}),//nu e eleganta metoda prin care tin minte tokenul, 
      //dar nu am gasit alta solutie ( probabil exista)
      catchError(error=>{
        alert(error.error);
        return of({token:null});
      })

    );

  }



  private doLoginUser(username:string, tokens:TokenPair) {

      this.loggedUser=username;
      localStorage.setItem(this.JWT_TOKEN,tokens.jwt);
      localStorage.setItem(this.response,tokens.jwt);
      //localStorage.setItem(this.REFRESH_TOKEN,tokens.refreshToken) 
      //^ nu sunt sigur daca trebuie
  }

  public register(payload: IRegisterPayload): Observable<IRegisterResponse> {
    // to be implemented
    return null;
  }

  public forgot(payload: IForgotPayload): Observable<any> {
    
    return null;
  }

  public logout(): void {
    // to be implemented
  }
}
