System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GameService, game, previousStep;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GameService = (function () {
                function GameService() {
                }
                GameService.prototype.setStep = function (i) {
                    previousStep = game.step;
                    game.step = i;
                    console.log("current step: " + i);
                };
                GameService.prototype.getPreviousStep = function () {
                    return previousStep;
                };
                GameService.prototype.getNextStep = function () {
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