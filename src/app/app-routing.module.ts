import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewslistComponent } from './newslist/newslist.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { SuccesfulRegistrationComponent } from './succesful-registration/succesful-registration.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: WelcomeComponent},
  { path: 'newslist', component: NewslistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'favorites', component: FavoriteListComponent},
  { path: 'succesful_registration', component: SuccesfulRegistrationComponent },
  { path: 'search', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
