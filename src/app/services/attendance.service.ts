import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AttendanceService {
    constructor(private http: HttpClient) { }
    
    // public getstatus(id: Number): Promise<string> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         }),
    //         student_id: id
    //     };

    //     return this.http
    //         .post('http://localhost:3000/attendance/findbystudentid', httpOptions)
    //         .toPromise()
    //         .then((result: any) => {
    //             // console.log(result);
    //             return result;
    //         })
    //         .catch((err: any) => {
    //             return Promise.reject(err.statusText);
    //         });
    // }
    public updatetype(type: Number, id: Number): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            id: id,
            type: type
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

    public updateremark(remark: string): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            remark: remark
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
}