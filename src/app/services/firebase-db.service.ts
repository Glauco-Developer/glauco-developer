import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { ContactFormModel } from '../contact/contact-form.model';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';;

@Injectable({providedIn: 'root'})
export class FirebaseDbService {

    constructor(private http: HttpClient) {}

    createAndStoreContact(formData: ContactFormModel) {
        return this.http.post<{name: string}>(`${environment.firebase}/contacts.json`, formData)
    }
    
    fetchContact() {
        return this.http.get<{[key: string]: ContactFormModel}>(`${environment.firebase}/contacts.json`)
        .pipe(
            map(responseData => {
                const dataArray: ContactFormModel[] = [];
                for(const key in responseData) {
                    if(responseData.hasOwnProperty(key)) {
                        dataArray.push({...responseData[key], id: key})
                    }
                }
                return dataArray;
            })
        )
    }

    clearData() {
        return this.http.delete(`${environment.firebase}/contacts.json`)
    }

}