import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  pass = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginWithEmailAndPassword() {
    this.authService.emailAndPasswordLogin(this.email, this.pass);
  }

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  loginWithFacebook() {
    this.authService.facebookLogin();
  }

}
