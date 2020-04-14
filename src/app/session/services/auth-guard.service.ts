import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivateChild } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild {

  constructor(public router: Router, private http: HttpClient) {}

  public isAuthenticated(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const token = localStorage.getItem('token');
    return !jwtHelper.isTokenExpired(token);
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

  canActivateChild(): boolean {
    return this.isAuthenticated();
  }
}
