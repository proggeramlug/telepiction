import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StartComponent}   from './start/start.component';
import {GameDrawComponent}     from './game/draw.component';
import {GamePassComponent}   from './game/pass.component';
import {GameWriteComponent}   from './game/write.component';
import {GameService}           from './game/game.service';

    @Component({
        selector: 'my-app',
        templateUrl: 'app/views/wrapper.html',
        providers:  [GameService],
        directives: [ROUTER_DIRECTIVES]
    })
    @RouteConfig([

  { 
    path: '/',
    name: 'Start',
    component: StartComponent,
    useAsDefault: true
  },
  {path:'/draw', name: 'Draw', component: GameDrawComponent},
  {path:'/pass',        name: 'Pass',       component: GamePassComponent},
  {path:'/write',      name: 'Write',   component: GameWriteComponent}

])
    export class AppComponent { }