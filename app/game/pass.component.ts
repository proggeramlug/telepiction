    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/pass.html'
    })
    export class GamePassComponent {
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
     }
    nextStep() {
       this._router.navigate([this._service.getNextStep()]);
    }
    }