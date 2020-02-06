import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styles: [ ' .pColor {color : white; } ' ]
})
export class Assignment2Component {
active = false;
timeStamps = [];


onSwitch(e: Event) {
  this.timeStamps.push(e.timeStamp / 1000);
  this.active = !this.active;
}

checkColor(i) {
  return i > 4 ? 'blue' : 'white';
  }
}
