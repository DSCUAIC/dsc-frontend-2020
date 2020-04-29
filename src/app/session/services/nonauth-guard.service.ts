import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuardService implements CanActivateChild {
  constructor(public router: Router) {}

  public isNotAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

  canActivateChild(): boolean {
    return this.isNotAuthenticated();
  }
}
