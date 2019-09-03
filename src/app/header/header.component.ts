import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'homesss';
  viewMenu: boolean = false
  constructor() { }

  ngOnInit() {
    setTimeout(() => document.querySelector('header').classList.add('in'), 500);
  }

  toggleMenu() {
    if(!document.querySelector('body').classList.contains('menu-open')){
      this.viewMenu = true;
      document.querySelector('body').classList.remove('menu-close');
      setTimeout(() => {
        document.querySelector('body').classList.add('menu-open');
      },500)
    }
    else{
      document.querySelector('body').classList.remove('menu-open');
      document.querySelector('body').classList.add('menu-close');
      setTimeout(() => document.querySelector('body').classList.remove('menu-close'), 500)
      setTimeout(() => {
        this.viewMenu = false;
      },1000)
    }
  }

}
