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
            .get('http://localhost:3000/student/findbyclassid/' + id, httpOptions)
            .toPromise()
            .then((result: any) => {
                // console.log(result);
                return result;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }
    public getstudents2(id: Number): Promise<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        return this.http
            .get('http://localhost:3000/student/countattendance/' + id, httpOptions)
            .toPromise()
            .then((result: any) => {
                const val = result;
                const viewlist = [];
                for (let item in val) {
                    if (val[item].class_id != id) {
                        continue;
                    }
                    if (viewlist.findIndex((v) => v.studentId == val[item].studentId) >= 0) {
                        switch (val[item].type) {
                            case 1:
                                viewlist.find((v) => v.studentId == val[item].studentId).absent = val[item].count;
                            case 2:
                                viewlist.find((v) => v.studentId == val[item].studentId).late = val[item].count;
                            case 3:
                                viewlist.find((v) => v.studentId == val[item].studentId).early = val[item].count;
                            case 4:
                                viewlist.find((v) => v.studentId == val[item].studentId).attend = val[item].count;
                            case 5:
                                viewlist.find((v) => v.studentId == val[item].studentId).official = val[item].count;
                            case 6:
                                viewlist.find((v) => v.studentId == val[item].studentId).suspension = val[item].count;
                        }
                    }
                    else {
                        viewlist.push({
                            studentId: val[item].studentId,
                            studentNumber: val[item].studentNumber,
                            firstName: val[item].first_name,
                            lastName: val[item].last_name,
                            absent: 0,
                            late: 0,
                            early: 0,
                            attend: 0,
                            official: 0,
                            suspension: 0,
                        })
                    }
                }
                return viewlist;
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }
}