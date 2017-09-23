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
  joinDate: Date = new Date();
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
          firstname: this.firstName,
          lastname: this.lastName, 
          phone: this.phone,
          joindate: this.joinDate.getUTCDate()
      });

        
    }
    
    
    )
    .catch((error) =>
   {
    this.message = 'Error: ' + error;    
  });
    
  }

}
