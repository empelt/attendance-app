import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }

    public getusers(): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        // login APIにPOSTする
        return this.http
            .get('http://localhost:3000/users', httpOptions)
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