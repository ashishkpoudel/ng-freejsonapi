import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { JwtService } from './jwt.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor (
        private httpClient: HttpClient,
        private jwtService: JwtService
    ) {}

    private handleErrors(error: HttpErrorResponse) {
        return throwError(error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient.get<any> (`${environment.api_url}${path}`, {params})
            .pipe(catchError((error) => this.handleErrors(error)));
    }

    post(path: string, body: object): Observable<any> {
        return this.httpClient.post<any> (`${environment.api_url}${path}`, body)
            .pipe(catchError((error) => this.handleErrors(error)));
    }
}
