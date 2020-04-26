import { Component } from '@angular/core';


declare var jquery:any;  // 追加
declare var $ :any; // 追加
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attendance-app';
}
