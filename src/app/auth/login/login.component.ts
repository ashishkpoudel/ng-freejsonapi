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

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password)
      .subscribe(
        data => { this.router.navigateByUrl('/'); },
        error => { alert(error); }
      );
  }

}
