import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  message: string;
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  
  signup() {
    this.authService.signup(this.email, this.password).then((auth : string) =>
    {
        this.message = auth;
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
