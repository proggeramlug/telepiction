    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/pass.html'
    })
    export class GamePassComponent {
    passGif = "lib/img/pass2.gif";
    constructor(
    private _router: Router,
    private _service: GameService) {
    	if (this._service.getGame()==null)
      	{
          this._router.navigate(["Start"]);
          return;
        }
    }
     ngOnInit() {
       this._service.nextStep();
       this.passGif = "lib/img/pass2.gif?t="+Date.now();
     }
    nextStep() {
       this._router.navigate([this._service.getNextStep()]);
    }
    }