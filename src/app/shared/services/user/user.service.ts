import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uris = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getUserById(userId) {
    let username;
    this.http.get<User>(`http://localhost:3000/api/auth/user/${userId}`).subscribe(
      user => username = user.username
    );
    console.log({username});
    return username;
  }

  public regis(username, email, password) {
    const url = this.uris + `/auth/regis`;
    return this.http.post(
      url, { username, email, password }
    );
  }
}
