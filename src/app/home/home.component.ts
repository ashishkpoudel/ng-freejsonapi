import { Component, OnInit } from '@angular/core';
import { Post, Pagination, PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  posts_pagination: Pagination = new Pagination();
  posts_params = {page: 1};

  constructor (
    private postService: PostService,
    private userSerivce: UserService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts(this.posts_params).subscribe (
      data => {
        this.posts = data.posts;
        this.posts_pagination = data.pagination;
      }
    );
  }

  getCurrentUser() {
    alert(this.userSerivce.getCurrentUser().name);
  }

  pageChanged(event: any) {
    this.posts_params = {...this.posts_params, page: event.page};
    this.getPosts();
  }
}
