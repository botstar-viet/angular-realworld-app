import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/Article';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private userService : UserService,
  ) { }

  ngOnInit() {  
  }

}
