import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import * as M from 'materialize-css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public user: User = new User('', '', '', '');
  public text: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  logIn() {
    const logInPromises = this.userService.logIn(this.user);

    logInPromises.then(res => {
      this.router.navigate(['/']);
      M.toast({ html: `You have successfully logged in!`});
    })
    .catch(err => {
      M.toast({ html: `There was an error trying to logging in: ${err.code}` })
    });
  }

}
