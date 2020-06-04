import { Component, OnInit } from '@angular/core';
import { CsvService } from '../services/csv.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-csv-output',
  templateUrl: './csv-output.component.html',
  styleUrls: ['./csv-output.component.scss']
})
export class CsvOutputComponent implements OnInit {

  constructor(
    private csvservice: CsvService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  // getCsv() {
  //   console.log("imakoko")
  //   this.csvservice
  //     .getCsv("1")
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // }

  async getCsv() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    // login APIにPOSTする
    // this.http.get('http://localhost:3000/student/csv/1')
    //   .toPromise()
    //   .then((result: any) => {
    //     console.log(result)
    //     const link = document.createElement('a')
    //     link.href = URL.createObjectURL(new Blob([result.data]))
    //     link.download = 'task_list.csv'
    //     link.click()
    //   })
    //   .catch((err: any) => {
    //     return Promise.reject(err.statusText);
    //   });
    // const instance = axios.create();
    const result = await axios.get('http://localhost:3000/student/csv/1')
    // console.log(result)
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([result.data]))
    link.download = 'task_list.csv'
    link.click()
  }
}
