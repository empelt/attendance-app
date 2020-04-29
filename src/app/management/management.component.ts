import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

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
    {classnum: 14, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 15, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 16, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 17, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 18, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 21, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 22, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 23, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 24, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 25, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 26, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 27, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 28, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 31, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 32, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 33, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 34, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 35, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 36, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 37, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
    {classnum: 38, data: [
      {no: 1, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 2, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 3, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
      {no: 4, name: "山田", absent: 0, late: 3, early: 0, attend: 15},
    ]
    },
  ]

  viewlist = {};
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
    this.viewlist = this.attendlist.find((v) => v.classnum == this.classnum).data;
  }
  onOptionsSelected(event: any) {
    
  }

}
