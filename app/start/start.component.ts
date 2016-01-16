// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

@Component({
templateUrl: 'app/views/start.html'
})
export class StartComponent {
 
  playerNumbers = [3,4,5,6,7,8,9,10];
  model = new Game(3, true);
  submitted = false;
  constructor(
    private _router: Router,
    private _service: GameService) { }
  startGame() {
     console.log("H:"+this.model.numberOfPlayers);
      this._router.navigate(['Write']);
  }
  onSubmit() { this.submitted = true; }
}
