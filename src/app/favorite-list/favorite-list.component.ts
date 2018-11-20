import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { FirestoreService } from '../firestore.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  myNews: News[];
  newsArrived = false;

  constructor(private fService: FirestoreService, private local: LocalStorageService) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.fService.getFavorites(this.local.get('uid'))
      .subscribe( res => {
        console.log('RES: ' + JSON.stringify(res));
        this.myNews = res;
        this.newsArrived = true;
      });
  }

}
