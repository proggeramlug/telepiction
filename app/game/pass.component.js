System.register(['angular2/core', 'angular2/router', '../game/game.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, game_service_1;
    var GamePassComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            GamePassComponent = (function () {
                function GamePassComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.passGif = "lib/img/pass2.gif";
                    if (this._service.getGame() == null) {
                        this._router.navigate(["Start"]);
                        return;
                    }
                }
                GamePassComponent.prototype.ngOnInit = function () {
                    this._service.nextStep();
                    this.passGif = "lib/img/pass2.gif?t=" + Date.now();
                };
                GamePassComponent.prototype.nextStep = function () {
                    this._router.navigate([this._service.getNextStep()]);
                };
                GamePassComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/pass.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
                ], GamePassComponent);
                return GamePassComponent;
            })();
            exports_1("GamePassComponent", GamePassComponent);
        }
    }
});
//# sourceMappingURL=pass.component.js.map