import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    constructor(private http: HttpClient) { }
    
    // class_id が一致する生徒をとってくる
    public getstudents(id: Number): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        return this.http
            .get('http://localhost:3000/student/findbyclassid/'+id, httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }
}