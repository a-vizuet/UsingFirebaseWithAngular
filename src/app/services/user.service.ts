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
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logIn(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
