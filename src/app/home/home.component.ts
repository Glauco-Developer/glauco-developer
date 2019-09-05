import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntegrationService } from '../services/integration.service';
import { Observable } from 'rxjs';
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

    setTimeout(() => {this.state = true},1500)
  }
 

  public showPageData(id: string) {
    return this.integrationService.getPageInfo(id)
      .subscribe(data => this.pageData = data)
  }
  
}
