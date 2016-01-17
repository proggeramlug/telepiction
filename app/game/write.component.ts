    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/write.html'
    })
    export class GameWriteComponent {
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
    	this._service.setStep(1);
    	this.imageToSee = this._service.getGame().images[this._service.getGame().roundNumber]==undefined?false:true;
    	if (this.imageToSee) {
    		
    		(<HTMLInputElement>document.getElementsByClassName('photo_bg')[0]).innerHTML = this._service.getGame().images[this._service.getGame().roundNumber].imageData;
    	}
    }
    nextStep() {
       if (this.imageToSee)
       {
         this._service.nextRound();
       }
       this._service.setTextForCurrentRound(this.text);
       this._router.navigate([this._service.getNextStep()]);
    }
    }