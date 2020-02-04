import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html'
})

export class AssignmentComponent {
  username = '';
  formEmpty = true;

  onUpdateUsername(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
}
