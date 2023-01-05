import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  count: number = 0;

  increment() {
    this.count = this.count + 5;

  }



  decrement() {
    this.count = this.count - 3;


    if (this.count < 0) {
      this.count = 0;
    }

  }


  reset() {
    this.count = 0;
  }

  handleClick() {
    let count = this.count;
    console.log(count);
  }


}
