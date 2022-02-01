import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Asset } from 'contentful';


@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.scss']
})
export class LastArticlesComponent implements OnInit {

  constructor(private blogPostService: BlogPostService) {
  }

  articles$: Observable<Asset> = this.blogPostService.getProducts()
  max: number = 3;


  ngOnInit() {
  }

  displayItems() {
    this.max += 3;
  }

}
