import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AttendanceService {
    constructor(private http: HttpClient) { }
    public updatetype(type: Number, id: Number, date: string): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            id: id,
            type: type,
            date: date
        };
        return this.http
            .post('http://localhost:3000/attendance/updatetype', httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }

    public updateremark(no: Number, remark: string,date: string): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            id: no,
            remark: remark,
            date: date
        };
        return this.http
            .post('http://localhost:3000/attendance/updateremark', httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }

    // public findattendance(no: Number): Promise<string> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         }),
    //         id: no,
    //     };

    //     return this.http
    //         .post('http://localhost:3000/attendance/updateremark', httpOptions)
    //         .toPromise()
    //         .then((result: any) => {
    //             // console.log(result);
    //             return result;
    //         })
    //         .catch((err: any) => {
    //             return Promise.reject(err.statusText);
    //         });
    // }
}