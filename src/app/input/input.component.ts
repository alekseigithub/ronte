

import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() value: number;
  @Input() readonly: boolean = false;
  @Input() mask: string;
  @Input() placeholder: string;
  @Input() required: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
