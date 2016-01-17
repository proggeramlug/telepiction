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
    timer;
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
    	console.log("animation steps:"+(this._service.getGame().roundNumber*2+1));
    	console.log("images saved:"+(this._service.getGame().images.length));
    	for (i = 0; i < (this._service.getGame().roundNumber*2+1); i++)
    	{
    		this.rounds[i] = this._service.getGame().images[Math.floor(i/2)].describingWord;
    	}
    	setTimeout(() => { this.initGraphics() }, 1000);
    	this.timer = setTimeout(() => { this.nextAniStep() }, 2000);
    }
    initGraphics() {
    	var i = 0;
    	for (i = 0; i < (this._service.getGame().roundNumber*2+1); i++)
    	{
    		if (i%2==1)
    			(<HTMLInputElement>document.getElementById('ani'+i)).innerHTML = this._service.getGame().images[Math.floor(i/2)].imageData;
    	}	
    }
    nextAniStep() {
    	this.currentStep++;
    	console.log("step:"+this.currentStep);
    	if (this.currentStep<(this._service.getGame().roundNumber*2+1))
    		this.timer = setTimeout(() => { this.nextAniStep() }, 1500);
    	else
    		this._router.navigate(["Recap"]);
    }
    
    }