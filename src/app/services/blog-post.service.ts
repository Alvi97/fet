import { Injectable } from '@angular/core';
import { Asset, createClient, Entry } from 'contentful';
import { CONFIG } from '../../environments/environment';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, pluck, take, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
    environment: CONFIG.environment,
    host: CONFIG.host
  });


  constructor() { }

  getProducts(query?: object): Observable<Asset> {
    return from(this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blogposts
    }, query))).pipe(pluck('items'))
  }

}

