System.register(['angular2/core', '../game-image'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_image_1;
    var GameService, game, previousStep;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_image_1_1) {
                game_image_1 = game_image_1_1;
            }],
        execute: function() {
            GameService = (function () {
                function GameService() {
                }
                GameService.prototype.setStep = function (i) {
                    previousStep = game.step;
                    game.step = i;
                    console.log("current step: " + i + " current round: " + game.roundNumber);
                };
                GameService.prototype.setTextForCurrentRound = function (text) {
                    console.log("the text for this round is: " + text);
                    if (game.images[game.roundNumber] == undefined) {
                        game.images[game.roundNumber] = new game_image_1.GameImage(text, null);
                    }
                    else {
                        game.images[game.roundNumber].describingWord = text;
                    }
                };
                GameService.prototype.nextStep = function () {
                    this.setStep(game.step + 1);
                    game.screenChanges++;
                };
                GameService.prototype.nextRound = function () {
                    game.roundNumber++;
                    if (game.roundNumber > (game.numberOfPlayers * 2 + 1)) {
                        game.roundNumber = (game.numberOfPlayers * 2 + 1);
                    }
                };
                GameService.prototype.setImageForCurrentRound = function (img) {
                    game.images[game.roundNumber].imageData = img;
                };
                GameService.prototype.getCurrentDrawingText = function () {
                    if (game.images[game.roundNumber]) {
                        console.log("word is: " + game.images[game.roundNumber].describingWord);
                        return game.images[game.roundNumber].describingWord;
                    }
                    return "";
                };
                GameService.prototype.getPreviousStep = function () {
                    return previousStep;
                };
                GameService.prototype.getNextStep = function () {
                    if (game.screenChanges == (game.numberOfPlayers * 2)) {
                        return 'Recap';
                    }
                    if (game.step == 0) {
                        return 'Write';
                    }
                    else if (game.step == 1) {
                        return 'Pass';
                    }
                    else if (game.step == 2) {
                        return 'Draw';
                    }
                    else if (game.step == 3) {
                        return 'Pass';
                    }
                    else if (game.step == 4) {
                        return 'Write';
                    }
                };
                GameService.prototype.setGame = function (g) {
                    game = g;
                };
                GameService.prototype.getGame = function () {
                    return game;
                };
                GameService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GameService);
                return GameService;
            })();
            exports_1("GameService", GameService);
            game = null;
            previousStep = 0;
        }
    }
});
//# sourceMappingURL=game.service.js.map