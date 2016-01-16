    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';
declare var LC:any; // Magic

    @Component({
      templateUrl: 'app/views/draw.html'
    })
    export class GameDrawComponent {
    constructor(
    private _router: Router,
    private _service: GameService) {
    console.log("init now");
    	LC.init(document.getElementsByClassName('literally')[0], {
		imageURLPrefix: 'img',

		primaryColor: '#000',
		secondaryColor: '#fff',
		backgroundColor: 'transparent',
		strokeWidths: [1,2,5,10],
		defaultStrokeWidth: 1,
		zoomMax: 4,
		zoomMin: 1,
		toolbarPosition: 'top',
		tools: [
		        LC.tools.Pencil,
		        LC.tools.Eraser
		      ],

	})
    }
    nextStep() {
       this._router.navigate(['Write']);
    }
    }