import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => document.querySelector('.preloader').classList.add('in'), 1000);
    setTimeout(() => document.querySelector('.preloader').classList.add('out'), 5300);
    setTimeout(() => document.querySelector('.preloader').remove(), 6000);
    setTimeout(() => document.querySelector('.logo').classList.add('dark'), 3000);
    // setTimeout(() => document.querySelector('.logo').classList.remove('dark'), 4370);
  }

}
