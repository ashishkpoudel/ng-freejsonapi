import { Component } from '@angular/core';

import { UserService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-freejsonapi';

  constructor(private userService: UserService) {}

  handleClick() {
    this.userService.currentUser.subscribe(data => { alert(data.name); });
  }
}
