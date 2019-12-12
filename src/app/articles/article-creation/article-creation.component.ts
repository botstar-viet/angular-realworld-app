import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/auth/authentication.service';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private authService : AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const author = this.authService.currentUserValue._id;
      let article = form.value;
    Object.assign(article, { author });
    this.createArticle(article);
  }

  private createArticle(article) {
    this.articleService.createArticle(article).subscribe(
      rs => this.router.navigate(['/'])
    )
  }
}
