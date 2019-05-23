import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  post_form: FormGroup;
  post_errors: {};

  constructor (
    private form_builder: FormBuilder, 
    private post_service: PostService
  ) { }

  ngOnInit() {
    this.post_form = this.form_builder.group({
      title: ['', Validators.required],
      featured_image: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  createPost() {
    const post = {
      title: this.post_form.get('title').value,
      featured_image: this.post_form.get('featured_image').value,
      body: this.post_form.get('body').value
    };

    this.post_service.create(post).subscribe (
      data => console.log(data),
      error => { 
        if (error.status == 422) {
          this.post_errors = error.error.errors;
        }
      }
    );
  }

}