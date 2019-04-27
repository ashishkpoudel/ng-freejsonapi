import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtService } from './jwt.service';

@Injectable()
export class UserService {

    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

    login(email: string, password: string) {
        alert('login attemp using' + email + ' and ' + password);
    }
}