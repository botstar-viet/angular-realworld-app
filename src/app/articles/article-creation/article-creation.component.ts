import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/auth/authentication.service';
import { Article } from 'src/app/shared/models/Article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  save(title, description, body) {
    const article = { title, description, body };
    this.articleService.createArticle(article).subscribe(
      rs => this.router.navigate(['/'])
    )
  }

}
