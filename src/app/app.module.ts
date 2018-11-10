import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewsService } from './news.service';
import {FirestoreService } from './firestore.service';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyB7d-qHu0d592K9CKLFL9xyfaOcjWDHLak',
  authDomain: 'pwa-news-d5a07.firebaseapp.com',
  databaseURL: 'https://pwa-news-d5a07.firebaseio.com',
  projectId: 'pwa-news-d5a07',
  storageBucket: 'pwa-news-d5a07.appspot.com',
  messagingSenderId: '359211695526'
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SliderComponent,
    WelcomeComponent,
    HeaderComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularWebStorageModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    NewsService,
    FirestoreService,
    AuthService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
