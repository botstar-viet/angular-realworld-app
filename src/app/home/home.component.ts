import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { ArticleService } from '../shared/services/article/article.service';
import { Article } from '../shared/models/Article';
import { AuthenticationService } from '../shared/services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: User;
  private articles: Article[];

  constructor(
    private authService: AuthenticationService,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    if (this.authService.currentUserValue) {
      this.user = this.authService.currentUserValue;
    }
    this.getGlobalFeed();
  }

  getYourFeed() {
    if (this.user) {
      this.getArticlesByUser(this.user._id)
    } else {
      this.articles = [];
    }
  }

  getArticlesByUser(userId) {
    this.articleService.getArticlesByUserId(userId)
      .subscribe(
        arti => {
        this.articles = arti as Article[];
        }
      )
  }

  getGlobalFeed() {
    this.articleService.getArticles().subscribe(
      arti => this.articles = arti as Article[]
    )
  }

  sortByTitle() {
    this.articles.sort((pre, next) => {
      const titlePre = pre.title.toLocaleLowerCase();
      const titleNext = next.title.toLocaleLowerCase();
      if (titlePre > titleNext) {
        return -1;
      }
      if (titlePre < titleNext) {
        return 1;
      }
      return 0;
    })
  }
}

