import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentService } from '../services/student.service';
import { AttendanceService } from '../services/attendance.service';


@Component({
  selector: 'app-attend-list',
  templateUrl: './attend-list.component.html',
  styleUrls: ['./attend-list.component.scss'],
})
export class AttendListComponent implements OnInit {
  viewlist = {};
  valuelist = [];
  classnum: Number;

  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentService,
    private attendanceservice: AttendanceService
  ) { }

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

  //index: type  no: student_id
  onClick(index: number, no: number) {
    this.attendanceservice
    .updatetype(index, no)
    .catch((err: any) => {
      console.log(err);
    });
    // if (
    //   this.attendlist
    //     .find((v) => v.classnum == this.classnum)
    //     .data.find((v) => v.no == no).selectIndex == index
    // ) {
    //   this.attendlist
    //     .find((v) => v.classnum == this.classnum)
    //     .data.find((v) => v.no == no).selectIndex = 0;
    // } else {
    //   this.attendlist
    //     .find((v) => v.classnum == this.classnum)
    //     .data.find((v) => v.no == no).selectIndex = index;
    // }
  }
  checkInput(val: string): void {
    console.log(val);
  }

  //備考の中身を受け取って
  onKey(event: any, no: Number) {
    //this.viewlist.find((v)=>v.id == no)

    console.log(event.target.value)
    console.log(no)
  }
}
