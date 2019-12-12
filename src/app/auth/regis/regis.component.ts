import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  constructor(
    private userService: UserService,
    private routes: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.registration(
      form.value.username,
      form.value.email,
      form.value.password);
    this.routes.navigate(['/']);
  }

  private registration(username, email, password) {
    this.userService.regis(username, email, password).subscribe(
      rs => console.log(rs)
    );
    console.log(email + "-------------" + username + "-------------" + password);
  }

}
