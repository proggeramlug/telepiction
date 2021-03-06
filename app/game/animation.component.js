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
    var GameAnimationComponent;
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
            GameAnimationComponent = (function () {
                function GameAnimationComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.imageToSee = false;
                    this.text = "";
                    this.rounds = [];
                    this.currentStep = 0;
                    if (this._service.getGame() == null) {
                        this._router.navigate(["Start"]);
                        return;
                    }
                }
                GameAnimationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this._service.setStep(5);
                    var i = 0;
                    console.log("animation steps:" + (this._service.getGame().roundNumber * 2 + 1));
                    console.log("images saved:" + (this._service.getGame().images.length));
                    for (i = 0; i < (this._service.getGame().roundNumber * 2 + 1); i++) {
                        if (this._service.getGame().images[Math.floor(i / 2)] == undefined) {
                            console.log("Undefined I:" + i);
                        }
                        else
                            this.rounds[i] = this._service.getGame().images[Math.floor(i / 2)].describingWord;
                    }
                    setTimeout(function () { _this.initGraphics(); }, 1000);
                    this.timer = setTimeout(function () { _this.nextAniStep(); }, 2000);
                };
                GameAnimationComponent.prototype.initGraphics = function () {
                    var i = 0;
                    for (i = 0; i < (this._service.getGame().roundNumber * 2 + 1); i++) {
                        if (i % 2 == 1)
                            document.getElementById('ani' + i).innerHTML = this._service.getGame().images[Math.floor(i / 2)].imageData;
                    }
                };
                GameAnimationComponent.prototype.nextAniStep = function () {
                    var _this = this;
                    this.currentStep++;
                    console.log("step:" + this.currentStep);
                    if (this.currentStep < (this._service.getGame().roundNumber * 2 + 1))
                        this.timer = setTimeout(function () { _this.nextAniStep(); }, 1500);
                    else
                        this._router.navigate(["Recap"]);
                };
                GameAnimationComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/animation.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
                ], GameAnimationComponent);
                return GameAnimationComponent;
            })();
            exports_1("GameAnimationComponent", GameAnimationComponent);
        }
    }
});
//# sourceMappingURL=animation.component.js.map