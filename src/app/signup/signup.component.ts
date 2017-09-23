import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
  users$: FirebaseListObservable<any[]>;
  newUser$: FirebaseListObservable<any[]>;

  constructor(private afd: AngularFireDatabase, public authService: AuthService) { }

  ngOnInit() {
  }


  signup() {



    this.authService.signup(this.email, this.password).then((auth : any) =>
    {

        this.message = 'UID: ' + auth.uid;

        // Add user to database with new auth UID
        this.afd.object(`users/${auth.uid}`).set({
          first_name: this.firstName,
          last_name: this.lastName, 
          phone: this.phone,
          join_date: Date.now(),
          groups: {
            beginner: true,
            intermediate: false
          },
          last_logins: Date.now(),
          shopping_cart: null

      });

        
    }
    
    
    )
    .catch((error) =>
   {
    this.message = 'Error: ' + error;    
  });
    
  }

}
