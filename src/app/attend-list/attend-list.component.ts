import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-attend-list',
  templateUrl: './attend-list.component.html',
  styleUrls: ['./attend-list.component.scss'],
})
export class AttendListComponent implements OnInit {
  viewlist = {};
  classnum: Number;

  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentService
  ) {}

  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
      this.studentservice
      .getstudents(this.classnum)
      .then((result: string) => {
        console.log(result);
        this.viewlist = result;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  onClick(index: number, no: number) {
    if (
      this.attendlist
        .find((v) => v.classnum == this.classnum)
        .data.find((v) => v.no == no).selectIndex == index
    ) {
      this.attendlist
        .find((v) => v.classnum == this.classnum)
        .data.find((v) => v.no == no).selectIndex = 0;
    } else {
      this.attendlist
        .find((v) => v.classnum == this.classnum)
        .data.find((v) => v.no == no).selectIndex = index;
    }
  }
  checkInput(val:string): void {
    console.log(val);
  }
}
