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
        this.viewlist = result;
      })
      .catch((err: any) => {
        console.log(err);
      });

  }
  onOptionsSelected(event: any) {

  }

}
