import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';


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

  constructor(public afAuth: AngularFireAuth, private local: LocalStorageService, private router: Router, private zone: NgZone) {
  }

  registerUser(user: User): Promise<any> {
    const vezeteknev = user.vezeteknev;
    const keresztnev = user.keresztnev;
    const email = user.email;
    const pass = user.pass;
    const result$ = new Promise( (resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pass)
      .then( (data) => {
        console.log('Sikeres regisztráció ' + JSON.stringify(data));
        resolve(data);
      })
      .catch( err => {
        console.log('ERROR' + err);
        reject(err);
      });
    });
    return result$;

  }

  emailAndPasswordLogin(email: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( data => {
        console.log('Sikeres bejelentkezés' + JSON.stringify(data));
        this.local.set('uid', data.user.uid );
        this.local.set('email', data.user.email);
        this.isUserAuthenticated = true;
        this.zone.run(() => {
          this.router.navigate(['']);
        });
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
        this.zone.run(() => {
          this.router.navigate(['']);
        });
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
