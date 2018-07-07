import * as firebase from 'firebase';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class UserService {
  userSession: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private storage: AngularFireStorage ) {
    this.userSession = afAuth.authState;
  }

  signIn(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(
        userCreated => this.afAuth.auth.currentUser.updateProfile({
          displayName: String(user.username),
          photoURL: String(user.photo)
        })
      );
  }

  logIn(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  uploadImage(image, imageFilename) {
    return this.storage.upload(`images/users/${imageFilename}`, image);
  }

}
