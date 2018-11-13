import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private fService: FirestoreService) { }

  ngOnInit() {
    this.fService.getUsers().subscribe(
      data => {
        this.user = data;
        console.log('profile/userdata: ' + JSON.stringify(this.user));
      }
    );
  }

}
