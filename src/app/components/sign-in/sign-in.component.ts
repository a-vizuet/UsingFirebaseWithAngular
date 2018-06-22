import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import * as M from 'materialize-css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public user: User = new User('', '');

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  signIn() {
    const signInPromises = this.userService.signIn(this.user);

    signInPromises
      .then(res => {
        this.router.navigate(['/']);
        M.toast({ html: `Account created and logged in!` });
      })
      .catch(err => {
        M.toast({ html: `There was an error while trying to create a new account. Try again. ${err}` });
      });
  }

}
