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
    var GameDrawComponent;
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
            GameDrawComponent = (function () {
                function GameDrawComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    console.log("init now");
                    LC.init(document.getElementsByClassName('literally')[0], {
                        imageURLPrefix: 'img',
                        primaryColor: '#000',
                        secondaryColor: '#fff',
                        backgroundColor: 'transparent',
                        strokeWidths: [1, 2, 5, 10],
                        defaultStrokeWidth: 1,
                        zoomMax: 4,
                        zoomMin: 1,
                        toolbarPosition: 'top',
                        tools: [
                            LC.tools.Pencil,
                            LC.tools.Eraser
                        ],
                    });
                }
                GameDrawComponent.prototype.nextStep = function () {
                    this._router.navigate(['Write']);
                };
                GameDrawComponent = __decorate([
                    // Magic
                    core_1.Component({
                        templateUrl: 'app/views/draw.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, game_service_1.GameService])
                ], GameDrawComponent);
                return GameDrawComponent;
            })();
            exports_1("GameDrawComponent", GameDrawComponent);
        }
    }
});
//# sourceMappingURL=draw.component.js.map