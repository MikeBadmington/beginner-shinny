import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  providers: [UserService, AuthService]
})
export class UserSettingsComponent implements OnInit {

  currentUser;


  email: string;
  uid: string;
  firstName: string;
  lastName: string;
  message: string;
  isVerified: boolean;

  constructor(private afd: AngularFireDatabase, public authService: AuthService, private us: UserService) { }

  ngOnInit() {

    //this.currentUser = this.us.getCurrentUser();
    //this.currentUser = this.us.getCurrentUserID;
    //this.currentUser = this.us.getCurrentUser;

  }





}
