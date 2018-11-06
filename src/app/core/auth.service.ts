import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';





interface User {
  email: string;
  kereszt_nev: string;
  pass: string;
  vez_nev: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

    /*this.user = this.afAuth.authState
      .switchMap( user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.email}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });*/
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then( credential => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.email}`);

    const data: User = {
      email: user.email,
      kereszt_nev: user.kereszt_nev,
      pass: user.pass,
      vez_nev: user.vez_nev,
    };

    return userRef.set(data);
  }

}
