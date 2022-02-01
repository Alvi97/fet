import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastArticlesModule } from './last-articles/last-articles.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LastArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
