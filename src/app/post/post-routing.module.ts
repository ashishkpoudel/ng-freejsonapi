import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostResolver } from './post-resolver.service';
import { PostComponent } from './post.component';

const routes: Routes = [
    { path: ':id', component: PostComponent, resolve: { post: PostResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}