import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentService } from '../services/student.service';
import { AttendanceService } from '../services/attendance.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-attend-list',
  templateUrl: './attend-list.component.html',
  styleUrls: ['./attend-list.component.scss'],
})
export class AttendListComponent implements OnInit {
  viewlist = [];
  classnum: Number;
  now = new Date();
  today = this.datePipe.transform(this.now, "yyyy-MM-dd");


  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentService,
    private attendanceservice: AttendanceService,
    public datePipe: DatePipe
  ) {}

  monthdata = [
    "2020年1月",
    "2020年2月",
    "2020年3月",
    "2020年4月",
    "2020年5月",
    "2020年6月",
    "2020年7月",
    "2020年8月",
    "2020年9月",
    "2020年10月",
  ];
  datedata = [
    "1日",
    "2日",
    "3日",
    "4日",
    "5日",
    "6日",
    "7日",
    "8日",
    "9日",
    "10日",
    "11日",
    "12日",
    "13日",
    "14日",
    "15日",
    "16日",
    "17日",
    "18日",
    "19日",
    "20日",
    "21日",
    "22日",
    "23日",
    "24日",
    "25日",
    "26日",
    "27日",
    "28日",
    "29日",
    "30日",
    "31日",
  ];
  perioddata = [
    "ホームルーム",
    "1限",
    "2限",
    "3限",
    "4限",
    "5限",
    "6限",
  ];
  
  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
    this.studentservice
      .getstudents(this.classnum)
      .then((result: any) => {
        this.viewlist = result;
      })
      .catch((err: any) => {
        console.log(err);
      });
    
    this.studentservice
      .checkdb(this.classnum, this.today)
      .then((result: any) => {
        if(result[0].attendances.findIndex((v)=>v.date.substr(0,10)==this.today) == -1) {
          this.studentservice.creategetdata(this.classnum, this.today);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  //index: type  no: student_id
  onClick(index: number, no: number) {
    //locallistのtypeを更新
    this.viewlist.find((v)=>v.id==no).attendances[0].type = index;

    this.attendanceservice
      .updatetype(index, no, this.today)
      .catch((err: any) => {
        console.log(err);
      });
  }

  //　特定のstudent.idをもったオブジェクトのremarkをDBに投げる
  onSaveClick(no: Number) {
      const remark = this.viewlist.find((v)=>v.id == no).attendances.remark; 
      this.attendanceservice
      .updateremark(no, remark, this.today)
      .catch((err: any) => {
        console.log(err);
      });
  }

  //inputの中身を受け取ってローカルに保存
  onKey(event: any, no: Number) {
    this.viewlist.find((v)=>v.id == no).attendances.remark = event.target.value;
  }

  onOptionsSelected(event) {

  }

}
