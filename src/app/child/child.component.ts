import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public dataArray = [];

  public newFormGroup = new FormGroup({
    data: new FormControl('')
  });
  @Input() item = ''; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  submitInfo() {
    this.newItemEvent.emit(this.newFormGroup.value.data);
  }
  

}