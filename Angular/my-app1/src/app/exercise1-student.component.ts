import {
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1-student',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, SlicePipe],
  template: `
    <div [ngStyle]="{ 'background-color': 'brown', border: '2px solid black' }">
      <h2 [ngStyle]="{ 'text-align': 'center', color: 'white' }">Exercise 1</h2>
      @for (student of students; track student._id; let o=$odd, e=$even) {
      <p [ngClass]="{ grey: o, white: e }">
        @if(student.name.length > 20){
        {{ student.name | titlecase | slice : 0 : 20 }}.... }@else {
        {{ student.name | titlecase }}
        }
      </p>
      }
    </div>
  `,
  styles: `
     .grey {
        background-color: grey;
      }
      .white {
        background-color: white;
      }
  `,
})
export class Exercise1StudentComponent {
  students = [
    { _id: '1', name: 'asaad saad' },
    { _id: '2', name: 'theo saad' },
    { _id: '3', name: 'mike saad' },
    { _id: '4', name: 'mada saad' },
    { _id: '5', name: 'mada saadskksisksiw sissikaaj ssaja ' },
  ];
}
