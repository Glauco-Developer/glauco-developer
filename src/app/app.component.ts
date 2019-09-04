import { Component, ViewEncapsulation} from '@angular/core';
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

export class AppComponent{

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
