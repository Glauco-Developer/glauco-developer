import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../../services/firebase-db.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { ContactFormModel } from '../../contact/contact-form.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  loadedData: ContactFormModel[] = [];
  isLoading: boolean = false;
  error = null;

  constructor(private firebase: FirebaseDbService) { }

  ngOnInit() {
    this.onFetchForm();
  }

  onFetchForm() {
    this.isLoading = true;
    this.firebase.fetchContact().subscribe(
      data => {
        this.isLoading = false;
        this.loadedData = data;
      }, error => {
        this.error = error.error.error
        console.log(error)
      }
    )    
  }

  onClearForm() {
    this.firebase.clearData().subscribe(() => {
      this.loadedData = [];
    })
  }

}
