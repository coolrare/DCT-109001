import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';

  @Input() subtitle = '';

  @Output() logoclick = new EventEmitter<string>();

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
      this.logoclick.emit(this.sitename);
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
