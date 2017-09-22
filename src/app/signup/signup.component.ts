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

  constructor(private afd: AngularFireDatabase, public authService: AuthService) { }

  ngOnInit() {
  }


  signup() {
    this.authService.signup(this.email, this.password).then((auth : string) =>
    {
        this.message = auth;
        this.users$.push({ email: this.email});
        this.email = this.password = '';
        
    })
    .catch((error) =>
   {
    this.message = error;    
  });
    
  }

}
