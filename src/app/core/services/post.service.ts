import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, Pagination } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class PostService {

    constructor(private apiService: ApiService, private  httpClient: HttpClient) { }

    getPosts(params = {}): Observable<{posts: Post[], pagination: Pagination}> {
        return this.apiService.get('/posts', new HttpParams({fromObject: params})).pipe (
            map(response => {
                return {
                  posts: response.data.map(post => Post.fromJson(post)),
                  pagination: Pagination.fromJson(response.meta.pagination)
                };
            })
        );
    }

    get(id: number): Observable<Post> {
        return this.apiService.get('/posts/' + id)
            .pipe(map(response => { return Post.fromJson(response.data); }));
    }

    create(post: object): Observable<Post> {
        return this.apiService.post('/posts', post)
            .pipe(map(response => response.data));
    }
}
