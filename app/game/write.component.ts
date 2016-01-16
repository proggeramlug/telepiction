    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/write.html'
    })
    export class GameWriteComponent {
    constructor(
    private _router: Router,
    private _service: GameService) {
      if (this._service.getGame()==null)
      {
          this._router.navigate(["Start"]);
          return;
      }
      this._service.setStep(1);
    }
    nextStep() {
       console.log("next:"+this._service.getNextStep());
       this._router.navigate([this._service.getNextStep()]);
    }
    }