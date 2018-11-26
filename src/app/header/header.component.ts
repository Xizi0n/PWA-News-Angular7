import { Component, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Article } from '../firestore.service';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '../auth.service';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  @Output() newsSearched = new EventEmitter();
  isUserLoggedIn = this.auth.isUserAuthenticated;
  search: string;

  constructor(private fservice: FirestoreService, public local: LocalStorageService, private auth: AuthService,
    private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.key === 'Enter') {
      // this.newsService.query = this.search;
      this.newsSearched.emit(this.search);
      this.newsService.searchNews(this.search)
        .subscribe(data => {
          console.log('SEARCHEDNEWS:' + this.search + JSON.stringify(data));
          this.goSearch();
      });
    }
  }

  ngDoCheck() {
    this.isUserLoggedIn = this.auth.isUserAuthenticated;
  }

  logout() {
    this.auth.logout();
  }

  goSearch() {
    this.router.navigate(['search']);
  }


}
