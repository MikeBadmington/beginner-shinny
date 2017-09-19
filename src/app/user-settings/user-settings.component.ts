import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  user$: FirebaseListObservable<any[]>;
  email: string;
  uid: string;
  message: string;
  isVerified: boolean;

  constructor(private afd: AngularFireDatabase, public authService: AuthService) { }

  ngOnInit() {

  this.authService.user.subscribe(authData => {
    console.log(authData);
    let uid = authData.uid;
    this.uid = uid;
    this.email = authData.email;
    this.isVerified = authData.emailVerified;
      this.authService.user.subscribe(authData => {
    
    let uid = authData.uid;
    this.uid = uid;
    this.email = authData.email;
    this.isVerified = authData.emailVerified;
    this.user$ = this.afd.list('/', {
        query: {
            orderByChild: 'useruid',
            equalTo: uid // currentUser.uid 
          
        }
    });
});
    this.user$ = this.afd.list('/', {
        query: {
            orderByChild: 'useruid',
            equalTo: uid // currentUser.uid 
          
        }
    });
});

  }


  


}
