import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.model';
import { FirestoreService } from '../firestore.service';
import { AuthService } from '../auth.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-newslistitem',
  templateUrl: './newslistitem.component.html',
  styleUrls: ['./newslistitem.component.css']
})
export class NewslistitemComponent implements OnInit {

  @Input() news: News;
  isFavourite = false;

  constructor(private fService: FirestoreService, private authService: AuthService, private local: LocalStorageService) {
    // console.log('ListItem ' + this.news);
  }

  ngOnInit() {
  }

  favouriteClicked() {
    if (this.authService.isUserAuthenticated) {
      this.isFavourite = !this.isFavourite;
      if (this.authService.isUserAuthenticated) {
        console.log('We have a logged in user');
        if (this.isFavourite === true) {
          this.fService.addFavorite(this.news, this.local.get('uid'));
        }
      }
    } else {
      alert('Csak bejelentkezett felhasználók tudnak a kedvencekhez hírt hozzáadni!');
    }
  }

  removeFavourite() {
    this.fService.deleteFavourite(this.local.get('uid'), this.news);
    this.isFavourite = false;
  }

}
