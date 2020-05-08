import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss']
})
export class CheckingAccountComponent implements OnInit {
  public loading = true;
  private token: string;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    const { queryParams } =  this.route.snapshot;
    this.token = queryParams.token;

    this.requestValidation();
  }

  public requestValidation() {
    console.log('emited');
    this.sessionService.validate({ token: this.token })
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        () => this.loading = false
      );
  }
}
