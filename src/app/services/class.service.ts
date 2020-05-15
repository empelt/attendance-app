import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ClassService {
    constructor(private http: HttpClient) { }

    public allclass(): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        // login APIにPOSTする
        return this.http
            .get('http://localhost:3000/class', httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }

    public findbygrade(grade: number): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            grade: grade
        };

        // login APIにPOSTする
        return this.http
            .post('http://localhost:3000/class/findbyclassgrade', httpOptions)
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
