import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-freejsonapi';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.populate();
  }
}
