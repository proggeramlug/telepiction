    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';

    @Component({
      templateUrl: 'app/views/draw.html'
    })
    export class GameDrawComponent {
    constructor(
    private _router: Router,
    private _service: GameService) { }
    nextStep() {
       this._router.navigate(['Write']);
    }
    }