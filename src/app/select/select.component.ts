import { EventEmitter, Output, Input, Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Utilities } from '../utilities.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {
  @Input() name: string;
  @Input() items;
  @Input() value: number;
  @Output() onIndexChange = new EventEmitter();

  activeClass: string = '';

  selectedIndex: number;

  options: any;

  @ViewChild("select__options") selectElement: ElementRef;



  onClick (event) {
 
    event.stopPropagation();

    if (this.activeClass === 'active') {
      this.activeClass = '';
    } else {
      this.activeClass = 'active';
    }

    var btn = this.utils.findSelectorAbove (event.target, '.select__option', '.select__options');

    if (btn) {
      this.selectedIndex = [].indexOf.call(this.options, btn);
      this.value = this.items[this.selectedIndex];
      this.onIndexChange.emit(this.selectedIndex);
    }
  }

  closeSelect () {
    this.activeClass = '';
  }

  constructor(private utils: Utilities) {

  }

  ngOnInit() {
  
    document.addEventListener('click', this.closeSelect.bind(this));
  }

  ngAfterViewInit() {
       
      this.options = this.selectElement.nativeElement.querySelectorAll('.select__option');
    }

}
