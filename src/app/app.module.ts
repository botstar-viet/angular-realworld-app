import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisComponent } from './auth/regis/regis.component';
import { ArticleComponent } from './articles/article/article.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleEditorComponent } from './articles/article-editor/article-editor.component';
import { ArticleCreationComponent } from './articles/article-creation/article-creation.component';
import { ArticleSearchComponent } from './article-search/article-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisComponent,
    ArticleComponent, 
    ArticleDetailComponent,
    ArticleEditorComponent,
    ArticleCreationComponent,
    ArticleSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
