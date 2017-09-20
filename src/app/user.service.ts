import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  uid: string;


  constructor(public authService: AuthService, private database: AngularFireDatabase) {
    this.users = database.list('users');

  }


  getUsers() {
    return this.users;
  }


  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }


  getCurrentUserId() {
    this.uid = '';
    this.authService.user.subscribe(
      (auth) => {
        if (auth != null) {
          this.uid = auth.uid;
          console.log('uid: ' + this.uid);
        }
      }
    );
    
    return this.uid;
  }

  getCurrentUser(){
    this.authService.user.subscribe(
      (auth) => {
        if (auth != null) {
          this.uid = auth.uid;
          console.log('uid: ' + this.uid);
          
          return this.database.object('users/' + this.uid);
        }
      }
    );

  }


// Deal with this later
  wtf() {
    this.authService.user.subscribe(
      (auth) => {
        if (auth != null) {
          this.users = this.database.list('users/' + auth.uid);
          console.log(auth.uid);


          this.users.subscribe(items => {
            // items is an array
            items.forEach(item => {
              console.log('Item:', item);
            });
          });
        }
      });

      /*
  this.authService.user.subscribe(authData => {
    console.log(authData);
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

*/

  }


}
