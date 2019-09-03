import { Component, OnInit } from '@angular/core';
import { isFullScreen, toggleFullScreen } from './fullscreen';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public fullScreen: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => document.querySelector('footer').classList.add('in'), 1000);
  }

  setFullScreen(full?: boolean): void {
    if (full !== isFullScreen())
      toggleFullScreen();
  }

  
}
