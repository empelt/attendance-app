import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  page: String;
  constructor( private router:Router) {}

  ngOnInit(): void {
    this.page = this.router.url;
    $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      var rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }

      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });
  }
}


