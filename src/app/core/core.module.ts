import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { 
  UserService, 
  JwtService,
  ApiService,
  PostService
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    JwtService,
    ApiService,
    PostService
  ]
})
export class CoreModule { }
