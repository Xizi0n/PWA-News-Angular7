import { Component, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Article } from '../firestore.service';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '../auth.service';
import { NewsService } from '../news.service';

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
    private newsService: NewsService) { }

  ngOnInit() {

    /* this.fservice.getUsers()
      .subscribe( data => console.log('getuser ' + data));

    this.fservice.getFavorites('Zp1MkrociFWMGANW1acVSDF66iy2')
      .subscribe((data => console.log('Data' + JSON.stringify(data))));


    const asd: Article = {
      description: 'Cikksorozatunkban a mozgóképes tapasztalataik alapján sorba rendezve mutattuk be a legtehet',
      photoUrl: 'https://img4.hvg.hu/image.aspx?id=698a72ec-1cf9-4b28-9480-53817a181b92&view=b2dea50f-cee1-4f6e-b810-034566fbfb2e',
      title: 'Törőcsik Franciska: Nem gondolják rólam, hogy van humorom',
      url: 'https://hvg.hu/kultura/20181109_A_legmenobb_fiatal_magyar_szinesznok_1_Torocsik_Franciska'
    };
    // this.fservice.addFavorite(asd, 'CDAU7NhPZt9FIZdFtr9t');

    this.fservice.deleteFavourite('CDAU7NhPZt9FIZdFtr9t', '79bh4HEe1YzJ0bZOgcso'); */
  }

  keyDownFunction(event) {
    if (event.key === 'Enter') {
      // this.newsService.query = this.search;
      this.newsSearched.emit(this.search);
      this.newsService.searchNews(this.search)
        .subscribe(data => console.log('SEARCHEDNEWS:' + this.search + JSON.stringify(data)));
    }
  }

  ngDoCheck() {
    this.isUserLoggedIn = this.auth.isUserAuthenticated;
  }

  logout() {
    this.auth.logout();
  }


}
