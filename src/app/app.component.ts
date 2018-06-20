import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit() {
    $(document).ready(
      () => $('.dropdown-trigger').dropdown()
    );
  }

  logOut() {
    this.userService.logOut();
  }

}
