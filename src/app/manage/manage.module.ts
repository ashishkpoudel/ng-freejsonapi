import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ManageComponent } from './manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {
      path: '', component: ManageComponent, children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'post/create', component: PostCreateComponent }
      ]
  }
];

@NgModule({
  declarations: [
    ManageComponent,
    DashboardComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageModule { }
