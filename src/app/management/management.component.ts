import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  viewlist = [];
  classnum: Number;

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

  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentService
  ) { }

  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
    this.studentservice
      .getstudents2(this.classnum)
      .then((result: any) => {
        const val = result;
        console.log(val);
        const id = 0;
        for (let item in val) {
          // console.log(val[item].studentId)
          if(val[item].class_id!=this.classnum) {
            continue;
          }
          if (this.viewlist.findIndex((v) => v.studentId == val[item].studentId) >= 0) {
            switch (val[item].type) {
              case 1:
                this.viewlist.find((v) => v.studentId == val[item].studentId).absent = val[item].count;
              case 2:
                this.viewlist.find((v) => v.studentId == val[item].studentId).late = val[item].count;
              case 3:
                this.viewlist.find((v) => v.studentId == val[item].studentId).early = val[item].count;
              case 4:
                this.viewlist.find((v) => v.studentId == val[item].studentId).attend = val[item].count;
              case 5:
                this.viewlist.find((v) => v.studentId == val[item].studentId).official = val[item].count;
              case 6:
                this.viewlist.find((v) => v.studentId == val[item].studentId).suspension = val[item].count;
            }
          }
          else {
            this.viewlist.push({
              studentId: val[item].studentId,
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
      })
      .catch((err: any) => {
        console.log(err);
      });

  }
  onOptionsSelected(event: any) {

  }

}
