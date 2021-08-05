import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = 'radio';
  name = 'Angular ' + VERSION.major;
  public dataArray = [];

  public newFormGroup = new FormGroup({
    data: new FormControl('')
  });

  addItem(newItem: string) {
    this.dataArray.push(newItem);
  }
  deleteItem(i) {
    this.dataArray.splice(i, 1);
  }
}
