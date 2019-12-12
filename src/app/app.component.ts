import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from './shared/models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-realworld-app';
  public modalRef: BsModalRef; // {1}
  private user: User;
  constructor(private modalService: BsModalService,) { } // {2}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
