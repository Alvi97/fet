import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Asset } from 'contentful';

export interface Pagination {
  pageSize: number;
  pageNumber: number;
  total: number
}

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.scss']
})


export class LastArticlesComponent implements OnInit {

  pagination: Pagination = { pageSize: 10, pageNumber: 0, total: 0 };

  constructor(private blogPostService: BlogPostService) {
  }

  articles$: Observable<Asset> = this.blogPostService.getProducts();
  // articlesData$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  max: number = 3;


  ngOnInit() {
  }

  displayItems() {
    this.max += 3;

    //in case of pagination push data received in articlesData behaviorSubject.
    // below code is a dummy function implementation in case of pagination since i couldnt test it.


    // this.blogPostService.getProductsOnClick(this.pagination).pipe(
    //   tap((data)=>{
    //     this.articlesData$.next([...this.articlesData$.getValue(), ...data])
    //   })

    // )
  }

}
