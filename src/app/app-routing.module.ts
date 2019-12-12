import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisComponent } from './auth/regis/regis.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleCreationComponent } from './articles/article-creation/article-creation.component';
import { ArticleEditorComponent } from './articles/article-editor/article-editor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regis', component: RegisComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent },
  { path: 'article-creation', component : ArticleCreationComponent },
  { path: 'article-editor/:id', component: ArticleEditorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
