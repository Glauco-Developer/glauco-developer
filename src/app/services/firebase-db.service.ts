import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/database';
import { FormModel } from '../contact/form.model';

@Injectable()
export class FirebaseDbService {

    sendForm(formData: any) {
        return firebase.database().ref(`contacts`).push({formData})
    }

}