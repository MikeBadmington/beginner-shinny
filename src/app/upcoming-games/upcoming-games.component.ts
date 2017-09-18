import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {
	games$: FirebaseListObservable<any[]>;
	  public localState = { value: '' };
  public date: Date = new Date();


  constructor(private afd: AngularFireDatabase, public authService: AuthService) { }

  ngOnInit() {
      this.games$ = this.afd.list('/games', {
	query: {
    limitToFirst: 3
		}
	});
  }
  
  
  
  
  
  addGame(value: string): void {
    this.games$.push({ date: this.date.toDateString(), content: value, done: false });
  }
  deleteGame(game: any): void {
    this.afd.object('/games/' + game.$key).remove();
  }

  toggleDone(game: any): void {
  this.afd.object('/games/' + game.$key)
    .update({ content: game.content, done: !game.done });
}
  
  updateGame(game: any, newValue: string): void {
    // ...
  }
  
  updateGame2(game: any, newValue: string): void {
  this.afd.object('/games/' + game.$key)
    .update({ content: newValue, done: game.done });    
}
  

}
