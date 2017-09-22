import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth.service';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule, DatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { CartComponent } from './cart/cart.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'upcoming-games', component: UpcomingGamesComponent },
  { path: 'my-games', component: MyGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: 'logout', component: HomeComponent },
  { path: '**', component: HomeComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UpcomingGamesComponent,
    HomeComponent,
    FooterComponent,
    MyGamesComponent,
    AddGameComponent,
    CartComponent,
    AdminBarComponent,
    UserSettingsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
	CommonModule,
	FormsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
	AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
	  AlertModule.forRoot(),
  DatepickerModule.forRoot()
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
