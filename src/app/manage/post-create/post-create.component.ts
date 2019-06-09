import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  postForm: FormGroup;
  postErrors: {};

  constructor (
    private formBuilder: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      featured_image: [null, Validators.required],
      body: [null, Validators.required],
    });
  }

  createPost() {
    const post: FormData = new FormData();
    post.append('title', this.postForm.get('title').value);
    post.append('featured_image', this.postForm.get('featured_image').value);
    post.append('body', this.postForm.get('body').value);

    this.postService.create(post).subscribe (
      data => console.log(data),
        error => {
        if (error.status === 422) {
          this.postErrors = error.error.errors;
        }
      }
    );
  }

  onFeaturedImageChange(event: any) {
    const file: File = event.target.files[0];
    this.postForm.patchValue({featured_image: file});
  }
}
