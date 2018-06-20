import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  userSession: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth ) {
    this.userSession = afAuth.authState;
  }

  signIn(user: User) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then()
      .catch();
  }

  logIn(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
