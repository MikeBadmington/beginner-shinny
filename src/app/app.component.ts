import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$: FirebaseListObservable<any[]>;
  email: string;
  password: string;

  constructor(private afd: AngularFireDatabase, public authService: AuthService) {}

  ngOnInit() {
    this.todos$ = this.afd.list('/todos', {
  query: {
    limitToFirst: 3
  }
});
  }
  
  addTodo(value: string): void {
    this.todos$.push({ content: value, done: false });
  }
  deleteTodo(todo: any): void {
    this.afd.object('/todos/' + todo.$key).remove();
  }

  toggleDone(todo: any): void {
  this.afd.object('/todos/' + todo.$key)
    .update({ content: todo.content, done: !todo.done });
}
  
  updateTodo(todo: any, newValue: string): void {
    // ...
  }
  
  updateTodo2(todo: any, newValue: string): void {
  this.afd.object('/todos/' + todo.$key)
    .update({ content: newValue, done: todo.done });    
}
  
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
