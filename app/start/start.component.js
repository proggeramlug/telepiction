System.register(['angular2/core', 'angular2/router', '../game', '../game/game.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, game_1, game_service_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.playerNumbers = [3, 4, 5, 6, 7, 8, 9, 10];
                    this.model = new game_1.Game(3, true, 0, []);
                    this.submitted = false;
                    this._service.setGame(this.model);
                    this._service.setStep(0);
                }
                StartComponent.prototype.startGame = function () {
                    console.log("Starting the game!");
                    this._service.setGame(this.model);
                    this._router.navigate(['Write']);
                };
                StartComponent.prototype.onSubmit = function () { this.submitted = true; };
                StartComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/start.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
                ], StartComponent);
                return StartComponent;
            })();
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map