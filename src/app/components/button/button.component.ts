import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Output() onButtonClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
