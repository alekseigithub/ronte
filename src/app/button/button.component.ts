import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() btnClass: string = '';
@Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
