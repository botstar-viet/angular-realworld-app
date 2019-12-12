import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { Article } from 'src/app/shared/models/Article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() { }


}
