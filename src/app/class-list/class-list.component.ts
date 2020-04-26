import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  gradeList = [];

  classList = [
    { grade: 1, classname: "１年１組" },
    { grade: 1, classname: "１年２組" },
    { grade: 1, classname: "１年３組" },
    { grade: 1, classname: "１年４組" },
    { grade: 1, classname: "１年５組" },
    { grade: 1, classname: "１年６組" },
    { grade: 1, classname: "１年７組" },
    { grade: 1, classname: "１年８組" },
    { grade: 2, classname: "２年１組" },
    { grade: 2, classname: "２年２組" },
    { grade: 2, classname: "２年３組" },
    { grade: 2, classname: "２年４組" },
    { grade: 2, classname: "２年５組" },
    { grade: 2, classname: "２年６組" },
    { grade: 2, classname: "２年７組" },
    { grade: 2, classname: "２年８組" },
    { grade: 3, classname: "３年１組" },
    { grade: 3, classname: "３年２組" },
    { grade: 3, classname: "３年３組" },
    { grade: 3, classname: "３年４組" },
    { grade: 3, classname: "３年５組" },
    { grade: 3, classname: "３年６組" },
    { grade: 3, classname: "３年７組" },
    { grade: 3, classname: "３年８組" },
  ]

  viewclassList = this.classList;

  constructor() { }

  ngOnInit(): void {
    //学年の種類をまとめた配列の作成
    for (var item of this.classList) {
      if (this.gradeList.indexOf(item.grade) == -1 ) {
        this.gradeList.push(item.grade);
      }
    }
  }
  onOptionsSelected(event: any) {
    if (event == 0) {
      this.viewclassList = this.classList;
    }
    else {
      this.viewclassList = this.classList.filter(item => item.grade == event);
    }
  }
}
