import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuardService implements CanActivateChild {

  constructor(public router: Router) {}

  public isNotAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return false;
    } else {
      return true
    }
  }

  public isAuthenticated(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const token = localStorage.getItem('token');
    return !jwtHelper.isTokenExpired(token);
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  canActivateChild(): boolean {
    return this.isNotAuthenticated();
  }
}
