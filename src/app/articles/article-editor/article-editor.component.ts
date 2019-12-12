import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/Article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/services/article/article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

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
    if (id && id.length > 0) {
      this.articleService.getArticleById(id)
        .subscribe(art => this.article = art);
    }
  }

  onSubmit(form: NgForm) {
    let currentArticle = form.value;
    const _id = this.article._id;
    Object.assign(currentArticle, { _id });
    this.update(currentArticle);
  }

  validate() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser._id === this.article.author) {
      return true;
    }
    return false;
  }

  update(currentArticle: Article) {
    this.articleService.updateArticle(currentArticle)
      .subscribe(rs => this.router.navigate([`/article-detail/${rs._id}`]));
  }

}
