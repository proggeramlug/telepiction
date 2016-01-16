import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StartComponent}   from './start/start.component';

    @Component({
        selector: 'my-app',
        template: '<div id="wrapper"><router-outlet></router-outlet></div>',
        directives: [ROUTER_DIRECTIVES]
    })
    @RouteConfig([

  { 
    path: '/',
    name: 'Start',
    component: StartComponent,
    useAsDefault: true
  }

])
    export class AppComponent { }