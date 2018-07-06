import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User = new User('', '', '', '');
  file: File;
  uploadPercent: Observable<number>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  signIn() {
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('password')).value = '';
    (<HTMLInputElement>document.getElementById('username')).value = '';
    (<HTMLInputElement>document.getElementById('photo')).value = '';
    (<HTMLInputElement>document.getElementById('photoText')).value = '';

    const uploadImagePromises = this.userService.uploadImage(this.file, this.file.name);
    this.uploadPercent = uploadImagePromises.percentageChanges();

    uploadImagePromises
      .then(resImageUploaded => {
        this.user.photo = resImageUploaded.metadata.name;

        const signInPromises = this.userService.signIn(this.user);

        signInPromises
          .then(resSignIn => {
            this.router.navigate(['/']);
            M.toast({ html: `Account created and logged in!` });
          })
          .catch(errSignIn => {
            M.toast({ html: `There was an error while trying to create a new account. Try again. ${errSignIn}` });
          });

        this.uploadPercent = undefined;
      })
      .catch(errImageUploaded => {
        M.toast({ html: `There was an error while trying to create a new account. Try again. ${errImageUploaded}` });
        this.uploadPercent = undefined;
      });
  }

  getFile(event) {
    this.file = event.target.files[0];
  }

}
