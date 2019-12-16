import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(
    private router: Router,
    private authenService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    this.login(data.username, data.password);
  }

  private login(username, password) {
    this.authenService.login(username, password)
    .subscribe(rs => {
      this.router.navigate(['/']);
    });
  }

}
