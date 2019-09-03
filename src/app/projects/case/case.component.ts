import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntegrationService } from '../../services/integration.service';

import anime from 'animejs';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.sass']
})
export class CaseComponent implements OnInit {

  body;
  post;

  quote: string;
  quoteShow;

  postType: string = 'projects'
  
  
  constructor(private integrationService: IntegrationService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getPostBySlug(this.postType, this.route.snapshot.params['slug']);

    this.body = document.querySelector('body')

    setTimeout(() => this.body.classList.add('in'), 500)
    this.body.classList.add('light')
  }
  ngOnDestroy()	{
    this.body.classList.remove('light');
    this.body.classList.remove('in');
  }

  getPostBySlug(postType: string, slug: string) {
    return this.integrationService.getPostBySlug(postType, slug)
      .subscribe(data => this.post = data[0])
  }

}