import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-attend-list',
  templateUrl: './attend-list.component.html',
  styleUrls: ['./attend-list.component.scss'],
})
export class AttendListComponent implements OnInit {
  attendlist = [
    {
      classnum: 11,
      data: [
        { no: 1, name: '山田花子', selectIndex: 0 },
        { no: 2, name: '山田花子', selectIndex: 0 },
        { no: 3, name: '山田花子', selectIndex: 0 },
        { no: 4, name: '山田花子', selectIndex: 0 },
      ],
    },
    {
      classnum: 12,
      data: [
        { no: 1, name: '山田太郎', selectIndex: 0 },
        { no: 2, name: '山田太郎', selectIndex: 0 },
        { no: 3, name: '山田太郎', selectIndex: 0 },
        { no: 4, name: '山田太郎', selectIndex: 0 },
      ],
    },
    {
      classnum: 13,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 14,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 15,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 16,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 17,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 18,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 21,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 22,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 23,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 24,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 25,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 26,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 27,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 28,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 31,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 32,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 33,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 34,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 35,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 36,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 37,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
    {
      classnum: 38,
      data: [
        { no: 1, name: '山田', selectIndex: 0 },
        { no: 2, name: '山田', selectIndex: 0 },
        { no: 3, name: '山田', selectIndex: 0 },
        { no: 4, name: '山田', selectIndex: 0 },
      ],
    },
  ];
  viewlist = {};
  test = {};

  classnum: Number;

  constructor(
    private route: ActivatedRoute,
    private testservice: TestService
  ) {}

  ngOnInit(): void {
    this.classnum = Number(this.route.snapshot.queryParamMap.get('classnum'));
    this.viewlist = this.attendlist.find(
      (v) => v.classnum == this.classnum
    ).data;
    this.testservice
      .test()
      .then((result: string) => {
        console.log(result);
        this.test = result;
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
}
