    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/recap.html'
    })
    export class GameRecapComponent {
    imageToSee = false;
    text = "";
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
    	this._service.setStep(5);
    	this._service.nextRound();
    	
    }
    startGame() {
       this._router.navigate(["Start"]);
    }
    startAni() {
       this._router.navigate(["Animation"]);
    }
    }