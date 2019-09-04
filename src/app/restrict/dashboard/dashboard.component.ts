import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../../services/firebase-db.service';
import { map } from 'rxjs/operators';
import { ContactFormModel } from '../../contact/contact-form.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  loadedData: ContactFormModel[] = [];

  constructor(private firebase: FirebaseDbService) { }

  ngOnInit() {
    this.onFetchForm()
  }

  private onFetchForm() {
    this.firebase.fetchContactData()
    .pipe(map(responseData => {
      const dataArray: ContactFormModel[] = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          dataArray.push({...responseData[key], id: key})
        }
      }
      return dataArray;
    }))
    .subscribe(data => {
      this.loadedData = data;
    })
  }

}
