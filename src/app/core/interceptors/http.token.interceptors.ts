import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services';
import {hostReportError} from 'rxjs/internal-compatibility';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(private jwtService: JwtService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = {
            'Accept': 'application/json'
        };

        if (req.body instanceof FormData === false) {
          headers['Content-Type'] = 'application/json';
        }

        const token = this.jwtService.getToken();

        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }

        const request = req.clone({ setHeaders: headers });
        return next.handle(request);
    }
}
