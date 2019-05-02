import { Component, OnInit } from '@angular/core';

import { Post, PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(
    private postService: PostService,
    private userSerivce: UserService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => { this.posts = posts });
  }

  getCurrentUser() {
    alert(this.userSerivce.getCurrentUser().name);
  }

}
