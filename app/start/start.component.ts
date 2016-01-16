// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';

@Component({
templateUrl: 'app/views/start.html'
})
export class StartComponent {
 
  playerNumbers = [3,4,5,6,7,8,9,10];
  model = new Game(3, true);
  submitted = false;
  startGame() {
     console.log("H:"+this.model.numberOfPlayers);
  }
  onSubmit() { this.submitted = true; }
}

