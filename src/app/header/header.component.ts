import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  sitelogo = '/assets/images/logo.png';

  showIcons = false;

  fontSize = 12;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 2000);
  }

  changeTitle(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename += '！';
    }
  }

  changeSize(evt: WheelEvent) {
    // console.log(evt);

    if (evt.deltaY > 0) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }

    evt.preventDefault();
  }

}
