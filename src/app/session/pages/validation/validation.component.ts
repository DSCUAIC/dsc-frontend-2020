import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {

  private token: string;

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token = params.token;
      this.sessionService.validate({token: this.token}).subscribe(response => {
        console.log(response);
        this.router.navigate(['/'])
      })
    });
  }
}
