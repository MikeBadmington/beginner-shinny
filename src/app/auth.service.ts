import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  currentUser: firebase.User;
  fbAuth: AngularFireAuth;


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.fbAuth = firebaseAuth;

  }


  signup(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          this.currentUser = this.fbAuth.auth.currentUser;
          console.log('Success!', value);
          resolve(value);
        })
        .catch(err => {
          var message = err.message;
          console.log('Something went wrong:', message);
          reject(message);
        });
    });
  }

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          resolve(value);
          console.log('Nice, it worked!');
        })
        .catch(err => {
          var message = err.message;
          reject(message);
          console.log('Something went wrong:', err.message);

        });
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  forgotPassword(email: string) {
    this.firebaseAuth.auth.sendPasswordResetEmail(email).then(
      (success) => {
        console.log('Reset password email sent ')
      }, (error: Error) => {
        console.log('error sending reset')
      });
  }


}