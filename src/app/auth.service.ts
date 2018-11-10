import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated = false;

  constructor(public afAuth: AngularFireAuth, private local: LocalStorageService) {
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
      .then((data) => {
        console.log('Sikeres Google bejelentkezés' + data.user.email);
        this.local.set('uid', data.user.uid );
        this.local.set('email', data.user.email);
        this.isUserAuthenticated = true;
        // console.log('UID: ' + this.local.get('uid'));
        // console.log('email ' + this.local.get('email'));
      })
      .catch((err) => console.log('ERROR ' + err));
  }

  facebookLogin() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
    .then((data) => console.log('Sikeres Facebook bejelentkezés ' + JSON.stringify(data) ))
    .catch((err) => console.log('ERROR ' + err));
  }

  logout() {
    this.afAuth.auth.signOut()
    .then( () => {
      console.log('Sikeres kijelentkezés!');
      this.local.clear();
      this.isUserAuthenticated = false;
    })
    .catch(err => console.log('ERROR ' + err));
  }

}
