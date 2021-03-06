    
    import {GameImage} from './game-image';
    
    export class Game {
      constructor(
        public numberOfPlayers: number,
        public timed: boolean,
        public step: number, // 0 = not started, 1 = write, 2 = pass, 3 = draw, 4 = pass, 5 = recap
        public images: GameImage[],
        public roundNumber: number,
        public screenChanges: number
      ) {  }
    }