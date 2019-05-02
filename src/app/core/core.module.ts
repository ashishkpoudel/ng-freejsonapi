import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HttpTokenInterceptor } from './interceptors';

import { 
  UserService, 
  JwtService,
  ApiService,
  PostService,
  AuthGuardService,
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    UserService,
    JwtService,
    ApiService,
    PostService,
    AuthGuardService
  ]
})
export class CoreModule { }
