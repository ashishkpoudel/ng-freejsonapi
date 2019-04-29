import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class PostService {
    
    constructor (
        private apiService: ApiService
    ) {}

    getPosts(): Observable<Post[]> {
        return this.apiService.get('/posts')
            .pipe(map(data => { return data.data; }));
    }

    get(id: number): Observable<Post> {
        return this.apiService.get('/posts/' + id)
            .pipe(map(data => { return data.data; }));
    }
}