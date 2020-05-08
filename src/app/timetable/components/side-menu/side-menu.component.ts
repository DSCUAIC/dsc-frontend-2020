import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() nav: MatSidenav;

  constructor(
    private router: Router
  ) {}

  navigate(link: string) {
    this.nav?.close();
    this.router.navigate([link]);
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
