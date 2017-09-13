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
import { TabsModule } from 'ngx-bootstrap';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'upcoming-games', component: UpcomingGamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-navbar', component: NavbarComponent },
  { path: '**', component: HomeComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UpcomingGamesComponent,
    HomeComponent
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
    TabsModule.forRoot()
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
