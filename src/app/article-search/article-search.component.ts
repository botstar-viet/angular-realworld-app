import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Article } from '../shared/models/Article';
import { ArticleService } from '../shared/services/article/article.service';
import { debounce, distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  private article$: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.article$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(),
      switchMap((term: string) => this.articleService.searchArticle(term)));
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
