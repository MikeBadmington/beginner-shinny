import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  message: string;
  users$: FirebaseListObservable<any[]>;
  
  constructor(private afd: AngularFireDatabase, public authService: AuthService) { }

  ngOnInit() {
          this.users$ = this.afd.list('/users', {
	query: { limitToFirst: 3}
	});
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

  login() {
    this.authService.login(this.email, this.password).then((auth : string) =>
    {
        this.message = auth;
    })
    .catch((error) =>
   {
    this.message = error;    
  });
}


  logout() {
    this.authService.logout();
  }

  forgotPassword(){
    this.authService.forgotPassword(this.email);
    
  }

}
