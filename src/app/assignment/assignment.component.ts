import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html'
})

export class AssignmentComponent {
  username = '';
  formEmpty = true;

  Clear() {
    this.username = '';
    this.formEmpty = true;
  }
}
