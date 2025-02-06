import { NgStyle } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';

type UserDetail = {
  id: number;
  username: string;
  age: number;
};

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [NgStyle],
  template: `<div>
    <div
      [ngStyle]="{
        'background-color': '#F0F8FF',
        margin: '25px',
        padding: '10px'
      }"
    >
      <div>
        <h4>Inside child component</h4>
        <p>The message from parent is :{{ $msgFromParent() }}</p>
      </div>
      <div [ngStyle]="{ 'background-color': '#0ACED0', color: 'white' }">
        <h4>User Details</h4>
        @for (user of $userDetails(); track user.id) {
        <p>User name:{{ user.username }}</p>
        <p>User Age:{{ user.age }}</p>
        }
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class Child1Component {
  $msgFromParent = input.required();
  $usersFromParent = input.required<UserDetail[]>();

  // You can use an ngOnInit() life cycle hook to read an input
  $userDetails = signal<UserDetail[]>([]);
  ngOnInit() {
    this.$userDetails.set([...this.$usersFromParent()]);
  }
  $id = input.required();
  // Make http call immediately when the signal id is set and ready to use
  constructor() {
    effect(() => {
      console.log(this.$id());
    });
  }

  // Passing data from child to parent component.
}
