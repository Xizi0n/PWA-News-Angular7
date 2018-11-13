import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface User {
  email: string;
  kereszt_nev: string;
  pass: string;
  uid: string;
  vez_nev: string;
  favorites: {};
}

export interface Article {
  description: string;
  photoUrl: string;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  ref = firebase.firestore().collection('users');

  usersCollection: AngularFirestoreCollection;
  users: Observable<User[]>;
  favorites: Observable<Article[]>;

  constructor(private afs: AngularFirestore) { }


  getUsers(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log('GetUsers SERVICE: ' + JSON.stringify(data));
          users.push({
            email: data.email,
            kereszt_nev: data.kereszt_nev,
            pass: data.pass,
            uid: data.uid,
            vez_nev: data.vez_nev,
            favorites: data.favorites
          });
        });
        observer.next(users);
      });
    });

  }

  getFavorites(uid: string): Observable<any> {
    const favref = firebase.firestore().collection('users').doc(uid).collection('Favorites');
    return new Observable<Article[]>((observer) => {
      favref.onSnapshot((querySnapshot) => {
        const favorites = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          favorites.push({
            description: data.description,
            photoUrl: data.photoUrl,
            title: data.title,
            url: data.url
          });
        });
        observer.next(favorites);
      });
    });
  }

  addFavorite(article: Article, uid: string) {
    const favref = firebase.firestore().collection('users').doc(uid).collection('Favorites');

    favref.add(article);
  }

  deleteFavourite(Uuid: string, favId: string) {
    const favref = firebase.firestore().collection('users').doc(Uuid).collection('Favorites').doc(favId);
    favref.delete()
      .then(() => {
        console.log('Sikeres törlés');
      })
      .catch(err => {
        console.log('ERROR' + err);
      });
  }
}
