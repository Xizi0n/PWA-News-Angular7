import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  user: User = {
    vezeteknev: '',
    keresztnev: '',
    email: '',
    pass: '',
    passagain: ''
  };


  ngOnInit() {
  }


  register() {
    this.auth.registerUser(this.user);
    console.log('Regadatok :' + JSON.stringify(this.user));
  }

}
