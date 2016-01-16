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
  model = new Game(3, true,0,[]);
  submitted = false;
  constructor(
    private _router: Router,
    private _service: GameService) {
    this._service.setGame(this.model);
    this._service.setStep(0);
    }
  startGame() {
     console.log("Starting the game!");
     this._service.setGame(this.model);
      this._router.navigate(['Write']);
  }
  onSubmit() { this.submitted = true; }
}
