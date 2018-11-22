import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

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
    this.auth.registerUser(this.user)
      .then( data => {
        console.log('Regadatok :' + JSON.stringify(this.user));
        this.router.navigate(['/succesful_registration']);
      })
      .catch( err => console.log('Sikertelen regisztráció' + err) );
  }

}
