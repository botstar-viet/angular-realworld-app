import { Component, OnInit, Input } from '@angular/core';
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

  @Input() article: Article;

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

  validate() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser._id === this.article.author) {
      return true;
    }
    return false;
  }

  update() {
    // this.articleService.updateArticle(article)
    //   .subscribe(rs => this.router.navigate([`/article-detail/${rs._id}`]));
    console.log(this.article);
  }

}
