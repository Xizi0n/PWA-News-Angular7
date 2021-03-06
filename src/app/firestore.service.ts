import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from './model/news.model';


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
          // console.log(data);
          /* favorites.push({
            description: data.description,
            photoUrl: data.photoUrl,
            title: data.title,
            url: data.url
          }); */
          favorites.push(new News(data.author, data.title, data.description, data.content,
            data.publishedAt, data.source, data.url, data.urlToImage));
        });
        observer.next(favorites);
      });
    });
  }

  addFavorite(article: News, uid: string) {
    const favref = firebase.firestore().collection('users').doc(uid).collection('Favorites');
    const fsArticle = {
      author: article.author,
      title: article.title,
      description: article.description,
      content: article.content,
      publishedAt: article.publishedAt,
      source: article.source,
      url: article.url,
      urlToImage: article.urlToImage
    };
    favref.add(fsArticle);
  }

  deleteFavourite(Uuid: string, news: News) {

    const favoritesQuery = firebase.firestore().collection('users').doc(Uuid).collection('Favorites').where('title', '==', news.title);
    favoritesQuery.get()
      .then(data => {
        console.log(data);
        data.docs[0].ref.delete()
        .then( res => console.log('Sikeres törlés ' + res))
        .catch(error => console.log(error));
      })
      .catch (err => console.log(err));
  }
}
