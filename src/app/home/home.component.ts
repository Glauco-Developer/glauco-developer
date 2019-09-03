import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntegrationService } from '../services/integration.service';
import { Observable } from 'rxjs';
import anime from 'animejs/lib/anime.es.js';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  quote: string;
  quoteShow;
  state: boolean = false;

  pageData;
  page = '17';

  constructor(private integrationService: IntegrationService) {}

  ngOnInit() {

    particlesJS.load('particles-js', '../../assets/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });

    this.showPageData(this.page)

    let textWrapper = document.querySelector('.title .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    setTimeout(() => {
      this.state = true;
      anime.timeline({loop: false})
      .add({
        targets: '.title .letter',
        translateY: ["2.5em", 0],
        translateX: ["0.5em", 0],
        translateZ: 0,
        rotateZ: [90, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 10 * i
      })
    },1500)
  }
 

  public showPageData(id: string) {
    return this.integrationService.getPageInfo(id)
      .subscribe(data => this.pageData = data)
  }
  
}
