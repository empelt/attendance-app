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
  viewlist = [];
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
      .then((result: any) => {
        console.log(result);
        this.viewlist = result;
        console.log(this.viewlist.find((v)=>v.id==1).attendances)
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  //index: type  no: student_id
  onClick(index: number, no: number) {
    //locallistのtypeを更新
    this.viewlist.find((v)=>v.id==no).attendances.type = index;

    this.attendanceservice
      .updatetype(index, no)
      .catch((err: any) => {
        console.log(err);
      });
  }

  //　特定のstudent.idをもったオブジェクトのremarkをDBに投げる
  onSaveClick(no: Number) {
    //   let remark = this.viewlist.find((v)=>v.id == no).remark; 
    //   this.attendanceservice
    //   .updateremark(no, remark)
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  }

  //inputの中身を受け取ってローカルに保存
  onKey(event: any, no: Number) {
    // this.viewlist.find((v)=>v.id == no).remark = event.target.value;
  }

}
