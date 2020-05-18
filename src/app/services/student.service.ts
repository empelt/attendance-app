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
            class_id: id
        };

        return this.http
            .post('http://localhost:3000/student/findbyclassid', httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }

    public getstudents2(id: Number): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            class_id: id
        };

        return this.http
            .post('http://localhost:3000/student/findbyclassid2', httpOptions)
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