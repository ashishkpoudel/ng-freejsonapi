import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  errors = {};
  loginFailed: boolean = false;

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.errors = {};
    this.loginFailed = false;

    this.userService.login(this.email, this.password)
      .subscribe(
        data => { this.router.navigateByUrl('/'); },
        error => { 
          if (error.status === 401) {
            this.loginFailed = true;
          }

          if (error.status === 422) {
            this.errors = error.error.errors;
          }
        }
      );
  }

}
