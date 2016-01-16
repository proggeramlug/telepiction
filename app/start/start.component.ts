// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import { Game }    from './game';

@Component({
templateUrl: 'app/views/start.html'
})
export class StartComponent {
 
    
  model = new Game(3, true);
  submitted = false;
  onSubmit() { this.submitted = true; }
}

