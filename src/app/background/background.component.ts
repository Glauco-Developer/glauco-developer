import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent implements OnInit {
  
  state: boolean = false;

  constructor() { }

  ngOnInit() {

    $.fn.visible = function(partial) {    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    let textWrapper = document.querySelectorAll('.subtitle .letters');
    textWrapper.forEach(function(el) {
      el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    })
        
    setTimeout(() => {
      this.state = true;
      anime.timeline({loop: false})
      .add({
        targets: '.main-title .letter',
        translateY: ["2.5em", 0],
        translateX: ["0.5em", 0],
        translateZ: 0,
        rotateZ: [90, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 15 * i
      })   
      $('.main-title').removeClass("main-title, subtitle");
    },2000)

    $(window).on('scroll', function(event) {      
      $(".animate").each(function(i, el) {
        var el = $(el);
        if (el.visible(true) && (!el.hasClass('fadeIn'))) {
          el.addClass("fadeIn");            
            anime.timeline({loop: false})
            .add({
              targets: '.subtitle .letter',
              translateY: ["2.5em", 0],
              translateX: ["0.5em", 0],
              translateZ: 0,
              rotateZ: [90, 0],
              duration: 750,
              easing: "easeOutExpo",
              delay: (el, i) => 50 * i
            }) 
            el.removeClass("subtitle");
          }
      });        
    });

  }

}
