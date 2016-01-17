    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/animation.html'
    })
    export class GameAnimationComponent {
    imageToSee = false;
    text = "";
    rounds = [];
    currentStep = 0;
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
    	//this._service.setStep(5);
    	var i = 0;
    	for (i = 0; i < this._service.getGame().roundNumber*2; i++)
    	{
    		this.rounds[i] = this._service.getGame().images[i/2].describingWord;
    	}
    }
    
    }