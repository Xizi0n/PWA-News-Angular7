import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Article } from '../firestore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fservice: FirestoreService) { }

  ngOnInit() {
    this.fservice.getUsers()
      .subscribe(data => console.log(data));

    this.fservice.getFavorites('Zp1MkrociFWMGANW1acVSDF66iy2')
      .subscribe((data => console.log('Data' + JSON.stringify(data))));


    const asd: Article = {
      description: 'Cikksorozatunkban a mozgóképes tapasztalataik alapján sorba rendezve mutattuk be a legtehet',
      photoUrl: 'https://img4.hvg.hu/image.aspx?id=698a72ec-1cf9-4b28-9480-53817a181b92&view=b2dea50f-cee1-4f6e-b810-034566fbfb2e',
      title: 'Törőcsik Franciska: Nem gondolják rólam, hogy van humorom',
      url: 'https://hvg.hu/kultura/20181109_A_legmenobb_fiatal_magyar_szinesznok_1_Torocsik_Franciska'
    };
    // this.fservice.addFavorite(asd, 'CDAU7NhPZt9FIZdFtr9t');

    this.fservice.deleteFavourite('CDAU7NhPZt9FIZdFtr9t', '79bh4HEe1YzJ0bZOgcso');
  }

}
