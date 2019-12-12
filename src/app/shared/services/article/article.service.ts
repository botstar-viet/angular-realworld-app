import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/Article';
import { Observable, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private uris = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getArticlesByUserId(userId) {
    const url = this.uris + `/user/articles/${userId}`;
    return this.http.get<Article[]>(url);
  }

  getArticles() {
    const url = this.uris + `/api/articles`;
    return this.http.get<Article[]>(url);
  }

  createArticle(article) {
    const url = this.uris + `/user/article`;
    return this.http.post(url, article);
  }

  getArticleById(id) {
    const url = this.uris + `/api/article/${id}`;
    return this.http.get<Article>(url);
  }

  updateArticle(article) {
    const url = this.uris + `/api/article/editor`;
    return this.http.post<Article>(url, article);
  }

  deleteArticle(id) {
    const url = this.uris + `/api/article/delete`;
    console.log(id);
    return this.http.post(url, { id });
  }

  searchArticle(term: string): Observable<Article[]> {
    if (!term.trim()) {
      return of([]);
    };
    return this.http.get<Article[]>(this.uris + `/api/articles/?title=${term}`);
  }

}
