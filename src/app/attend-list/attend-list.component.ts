import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-attend-list',
  templateUrl: './attend-list.component.html',
  styleUrls: ['./attend-list.component.scss']
})
export class AttendListComponent implements OnInit {

  attendlist = [
    {classnum: 11, data: [
      {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 12, data: [
      {no: 1, name: "山田太郎", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田太郎", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田太郎", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田太郎", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 13, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
  ]
  viewlist = {};

  classnum: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
    this.viewlist = this.attendlist.find((v) => v.classnum == this.classnum).data;
  }


}
