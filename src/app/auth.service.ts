import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-web-storage';


export interface User {
  vezeteknev: string;
  keresztnev: string;
  email: string;
  pass: string;
  passagain: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated = false;

  constructor(public afAuth: AngularFireAuth, private local: LocalStorageService) {
  }

  registerUser(user: User) {
    const vezeteknev = user.vezeteknev;
    const keresztnev = user.keresztnev;
    const email = user.email;
    const pass = user.pass;
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pass)
      .then( (data) => {
        console.log('Sikeres regisztráció ' + JSON.stringify(data));
      })
      .catch( err => console.log('ERROR' + err) );
  }

  emailAndPasswordLogin(email: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( data => {
        console.log('Sikeres bejelentkezés' + JSON.stringify(data));
        this.local.set('uid', data.user.uid );
        this.local.set('email', data.user.email);
        this.isUserAuthenticated = true;
      })
      .catch( err => console.log('ERROR' + err) );
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
