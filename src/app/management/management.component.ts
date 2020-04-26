import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  attendlist = [
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
    {no: 1, name: "山田花子", absent: 0, late: 3, early: 0, attend: 15},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onOptionsSelected(event: any) {
    
  }

}
