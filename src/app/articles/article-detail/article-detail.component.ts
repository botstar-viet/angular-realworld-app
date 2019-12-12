import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/Article';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  private article: Article;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const id = this.activedRoute.snapshot.params['id'] as string;
    console.log({ id });
    if (id && id.length > 0) {
      this.articleService.getArticleById(id).subscribe(art => {
        this.article = art;
      });
    }
  }

  validate() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser !== undefined && currentUser !== null) {
      if (currentUser._id === this.article.author) {
        return true;
      }
    }
    return false;
  }

  delete() {
    this.articleService.deleteArticle(this.article._id).subscribe(rs => this.router.navigate(['/']));
  }
  
}
