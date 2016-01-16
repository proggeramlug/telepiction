    import {Injectable} from 'angular2/core';
    import {Game} from '../game';
    import {GameImage} from '../game-image';
    
    @Injectable()
    export class GameService {
      setStep(i : number)
      {
      previousStep = game.step;
      game.step = i;
      console.log("current step: "+i);
      }
      getPreviousStep()
      {
      return previousStep;
      }
      getNextStep() {
       if (game.step == 0)
       {
         return 'Write';
       }
       else if (game.step == 1)
       {
         return 'Pass';
       }
       else if (game.step == 2)
       {
         return 'Draw';
       }
       else if (game.step == 3)
       {
         return 'Pass';
       }
       else if (game.step == 4)
       {
         return 'Write';
       }
      }
      
      setGame(g : Game) {
      game = g;
      }
      getGame() {
      return game;
      }
    }
    var game = null;
    var previousStep = 0;