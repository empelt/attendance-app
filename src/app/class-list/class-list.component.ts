import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  gradeList = [1,2,3];

  classList = {};

  viewclassList = {};

  constructor(
    private classservice: ClassService
  ) { }

  ngOnInit(): void {
    this.classservice
      .allclass()
      .then((result: string) => {
        console.log(result);
        this.classList = result;
        this.viewclassList = result;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  onOptionsSelected(event: any) {
    if (event == 0) {
      this.viewclassList = this.classList;
    }
    else {
      this.classservice
      .findbygrade(event)
      .then((result: string) => {
        console.log(result);
        this.viewclassList = result;
      })
      .catch((err: any) => {
        console.log(err);
      });
    }
  }
}
