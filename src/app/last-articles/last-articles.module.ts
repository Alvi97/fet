import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastArticlesComponent } from './last-articles.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LastArticlesComponent
  }
];

@NgModule({
  declarations: [LastArticlesComponent, ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LastArticlesModule { }
