import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';

@Injectable()
export class UserService {

    constructor (
        private jwtService: JwtService,
        private apiService: ApiService
    ) {}

    login(email: string, password: string): Observable<User> {
        return this.apiService.post('/login', {'email': email, 'password': password})
            .pipe(map(data => { this.jwtService.saveToken(data.token); return data; }));
    }
}