import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CsvService {
    constructor(private http: HttpClient) { }

    async getCsv(id: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };
        // login APIにPOSTする
        this.http.get('http://localhost:3000/student/csv/' + id, httpOptions)
            .toPromise()
            .then((result: any) => {
                console.log(result)
                const link = document.createElement('a')
                link.href = URL.createObjectURL(new Blob([result.data]))
                link.download = 'task_list.csv'
                link.click()
            })
            .catch((err: any) => {
                return Promise.reject(err.statusText);
            });
    }
}