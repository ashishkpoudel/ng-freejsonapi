import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { JwtService } from 'src/app/core/services/jwt.service';

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
    private jwtService: JwtService
  ) {}

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password);
  }

}
