import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  
  public state: boolean = false;
  public menuLinks = [
    {
      text: 'welcome',
      link: 'home',
    },
    {
      text: 'projects',
      link: 'projects',
    },
    {
      link: 'background',
      text: 'background',
    },
    {
      text: 'contact',
      link: 'contact',
    }
  ];

  constructor() { }

  ngOnInit() {
    
    setTimeout(() => {

      let textWrapper = document.querySelectorAll('.lettersMenu');
      textWrapper.forEach(function(element){
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      })

      this.state = true;
      anime.timeline({loop: false})
      .add({
        targets: '.letter',
        translateY: ["1.5em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [80, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 10 * i
      })
      
    },1800)
  }

  closeMenu() {
    setTimeout(() => document.querySelector('body').classList.remove('menu-open'), 1000)
    document.querySelector('.mask-transition').classList.add('in')
    setTimeout(() => document.querySelector('.mask-transition').classList.remove('in'), 3000)
  }

}
