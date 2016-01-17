    import {Injectable} from 'angular2/core';
    import {Game} from '../game';
    import {GameImage} from '../game-image';
    
    @Injectable()
    export class GameService {
      setStep(i : number)
      {
      previousStep = game.step;
      game.step = i;
      console.log("current step: "+i+" current round: "+game.roundNumber);
      }
      setTextForCurrentRound(text : string)
      {
        console.log("the text for this round is: "+text);
      	if (game.images[game.roundNumber]==undefined)
      	{
      		game.images[game.roundNumber] = new GameImage(text,null);
      	}
      	else {
      		game.images[game.roundNumber].describingWord = text;
      	}
      }
      nextStep()
      {
         this.setStep(game.step+1);
         this.nextRound();
      }
      nextRound()
      {
      	 game.roundNumber++;
      }
      setImageForCurrentRound(img)
      {
      	game.images[game.roundNumber].imageData = img;
      }
      getCurrentDrawingText() {
        if (game.images[game.roundNumber])
      	{
      		console.log("word is: "+game.images[game.roundNumber].describingWord);
      		return game.images[game.roundNumber].describingWord;
      	}
      	return "";
      }
      getPreviousStep()
      {
      	return previousStep;
      }
      getNextStep() {
      if (game.roundNumber==(game.numberOfPlayers*2+1))
      {
      	return 'Recap';
      }
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