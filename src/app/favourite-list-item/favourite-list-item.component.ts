import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.model';
import { FirestoreService } from '../firestore.service';
import { AuthService } from '../auth.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-favourite-list-item',
  templateUrl: './favourite-list-item.component.html',
  styleUrls: ['./favourite-list-item.component.css']
})
export class FavouriteListItemComponent implements OnInit {

  @Input() news: News;
  isFavourite = false;

  constructor(private fService: FirestoreService, private authService: AuthService,  private local: LocalStorageService) {
    // console.log('ListItem ' + this.news);
  }

  ngOnInit() {
  }

  unfavoriteClicked() {
    // this.fService.deleteFavourite(this.local.get('uid'),  );
  }

}
