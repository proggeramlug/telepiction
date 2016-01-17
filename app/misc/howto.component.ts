// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

@Component({
templateUrl: 'app/views/howto.html'
})
export class HowtoComponent {
 
 
  constructor(
    private _router: Router,
    private _service: GameService) {
    
    }
  back() {
    
      this._router.navigate(['Start']);
  }
  
}
