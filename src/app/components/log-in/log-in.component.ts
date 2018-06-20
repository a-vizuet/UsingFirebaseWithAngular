import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public user: User = new User('', '');
  public text: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  logIn() {
    this.userService.logIn(this.user);
  }

}
