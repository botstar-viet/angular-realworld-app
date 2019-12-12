import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user: User;
  constructor(
    private authService : AuthenticationService,
    private authenService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  private logout() {
    this.authService.logout();
    this.isLogin();
  }

  private getUserName() {
    this.user = this.authenService.currentUserValue;
    return this.user.username;
  }

  private isLogin() {
    return localStorage.getItem('currentUser');
  }
}
