import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
      .then((data) => console.log('Sikeres Google bejelentkezés ' + JSON.stringify(data) ))
      .catch((err) => console.log('ERROR ' + err));
  }

  facebookLogin() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
    .then((data) => console.log('Sikeres Facebook bejelentkezés ' + JSON.stringify(data) ))
    .catch((err) => console.log('ERROR ' + err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
