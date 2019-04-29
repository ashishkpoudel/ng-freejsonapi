import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostResolver } from './post-resolver.service';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostResolver
  ]
})
export class PostModule { }
