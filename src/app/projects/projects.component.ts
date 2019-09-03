import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntegrationService } from '../services/integration.service';
import * as $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  body;
  posts;
  postType: string = 'projects';
  state: boolean = false

  constructor(private integrationService: IntegrationService) { }

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

    setTimeout(() => this.state = true, 2000 )

    let textWrapper = document.querySelectorAll('.subtitle .letters');
    textWrapper.forEach(function(el) {
      el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    })

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

    this.getPostsInfo(this.postType)

    this.body = document.querySelector('body')

    setTimeout(() => this.body.classList.add('in'), 500)
    this.body.classList.add('light')
  }
  ngOnDestroy()	{
    this.body.classList.remove('light');
    this.body.classList.remove('in');
  }

  getPostsInfo(postType: string){
    return this.integrationService.getPostsInfo(postType)
      .subscribe(data => this.posts = data)
  }

}
