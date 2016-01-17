    import {Component} from 'angular2/core';
    import {Router, RouteParams} from 'angular2/router';
import { Game }    from '../game';
import { GameService } from '../game/game.service';
declare var LC:any; // Magic

    @Component({
      templateUrl: 'app/views/draw.html'
    })
    export class GameDrawComponent {
    drawText = "";
    lc;
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
    	this._service.setStep(3);
    	this.drawText = this._service.getCurrentDrawingText();
    	this.lc = LC.init(document.getElementsByClassName('literally')[0], {
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
		      ]
		});
    }
    nextStep() {
    	var img = this.lc.getSVGString();
    	this.lc = null;
    	(<HTMLInputElement>document.getElementsByClassName('literally')[0]).innerHTML = "";
   		this._service.setImageForCurrentRound(img);
    	this._router.navigate([this._service.getNextStep()]);
    }
    }