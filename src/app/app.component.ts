import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './router-animations';
import * as firebase from 'firebase/app'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
  animations: [fader]
})

export class AppComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig)
  }

}
