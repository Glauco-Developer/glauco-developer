import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { ContactFormModel } from '../contact/contact-form.model';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class FirebaseDbService {

    constructor(private http: HttpClient) {}

    sendForm(formData: ContactFormModel) {
        return this.http.post<{name: string}>(`${environment.firebase}/contacts.json`, formData)
    }
    
    fetchContactData() {
        return this.http.get<{[key: string]: ContactFormModel}>(`${environment.firebase}/contacts.json`)
    }

}