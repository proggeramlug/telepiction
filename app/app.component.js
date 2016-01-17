System.register(['angular2/core', 'angular2/router', './start/start.component', './misc/howto.component', './game/draw.component', './game/pass.component', './game/write.component', './game/recap.component', './game/animation.component', './game/game.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, start_component_1, howto_component_1, draw_component_1, pass_component_1, write_component_1, recap_component_1, animation_component_1, game_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (howto_component_1_1) {
                howto_component_1 = howto_component_1_1;
            },
            function (draw_component_1_1) {
                draw_component_1 = draw_component_1_1;
            },
            function (pass_component_1_1) {
                pass_component_1 = pass_component_1_1;
            },
            function (write_component_1_1) {
                write_component_1 = write_component_1_1;
            },
            function (recap_component_1_1) {
                recap_component_1 = recap_component_1_1;
            },
            function (animation_component_1_1) {
                animation_component_1 = animation_component_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/wrapper.html',
                        providers: [game_service_1.GameService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Start',
                            component: start_component_1.StartComponent,
                            useAsDefault: true
                        },
                        { path: '/draw', name: 'Draw', component: draw_component_1.GameDrawComponent },
                        { path: '/pass', name: 'Pass', component: pass_component_1.GamePassComponent },
                        { path: '/write', name: 'Write', component: write_component_1.GameWriteComponent },
                        { path: '/recap', name: 'Recap', component: recap_component_1.GameRecapComponent },
                        { path: '/animation', name: 'Animation', component: animation_component_1.GameAnimationComponent },
                        { path: '/howto', name: 'Howto', component: howto_component_1.HowtoComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map