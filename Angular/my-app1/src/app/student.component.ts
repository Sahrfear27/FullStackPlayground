import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  template: ` <p>student works!</p> `,
  styles: ``,
})
export class StudentComponent {
  studnets = [
    { _id: '1', name: 'asaad saad' },
    { _id: '2', name: 'theo saad' },
    { _id: '3', name: 'mike saad' },
    { _id: '4', name: 'mada saad' },
  ];
}
