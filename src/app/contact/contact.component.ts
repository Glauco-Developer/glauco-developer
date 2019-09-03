import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
import { FirebaseDbService } from '../services/firebase-db.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  body;
  contactForm: FormGroup;
  state: boolean = false
  message : string = '';
  alertMesg: boolean;

  constructor(private fb: FormBuilder, private firebaseDbService: FirebaseDbService) { }

  ngOnInit() {
    this.body = document.querySelector('body')
    setTimeout(() => this.body.classList.add('in'), 500)
    setTimeout(() => this.body.classList.add('light'), 500)

    this.contactForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email, Validators.minLength(5)]
      }),
      message: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)]
      }),
    })

    let textWrapper = document.querySelectorAll('.subtitle .letters');
    textWrapper.forEach(function(el) {
      el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    })

    setTimeout(() => {

      $(".animate").each(function(i, el) {
        var el = $(el);
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
      });  


      this.state = true
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
    },2000)

  }

  submitForm(){
    this.firebaseDbService.sendForm({
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    }).then((res) => {
      this.alertMesg = true;
      this.message = 'Message successfully submited. Thank you!'
      document.querySelector('#message').classList.add('show')
      setTimeout(() => {
        document.querySelector('#message').classList.remove('show')
      }, 4000)
    }).catch((error: Error) => {
      this.alertMesg = false;
      this.message = 'An error ocurred, try again.'
      document.querySelector('#message').classList.add('show')
      setTimeout(() => {
        document.querySelector('#message').classList.remove('show')
      }, 4000)
    })
    
  }

  ngOnDestroy()	{
    this.body.classList.remove('in');
    this.body.classList.remove('light');
  }
}
