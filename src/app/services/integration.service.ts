import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { WP_API } from './api'

@Injectable()
export class IntegrationService {
    
    constructor(private http: HttpClient) {}

    getPageInfo(page: string): Observable<any> {
        return this.http.get(`${WP_API}/pages/${page}`)
    }
    
    getPostsInfo(postType: string): Observable<any> {
        return this.http.get(`${WP_API}/${postType}?_embed`)
    }

    getPostBySlug(postType: string, slug: string): Observable<any> {
        return this.http.get(`${WP_API}/${postType}?slug=${slug}&_embed`)
    }
}