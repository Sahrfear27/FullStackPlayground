import { Component } from '@angular/core';
import { Child1Component } from './child1.component';
import { NgClass } from '@angular/common';
type UserDetail = {
  id: number;
  username: string;
  age: number;
};
@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [Child1Component, NgClass],
  template: `
    <div [ngClass]="{ border: true, background: true, padding: true }">
      <p>communication works!</p>
      <div>
        <h5>Inside the Parent Component</h5>
        <app-child1
          [$msgFromParent]="msgToChildOne"
          [$usersFromParent]="users"
          [$id]="estateId"
        />
      </div>
    </div>
  `,
  styles: `
  .border {border:2px solid black}
  .background {background-color:grey}

  `,
})
export class CommunicationComponent {
  // This is the parent component
  msgToChildOne = 'Hello First Child Component';
  estateId = '2odsiw923jens0238';
  users: UserDetail[] = [
    { id: 1, username: 'Alves', age: 20 },
    { id: 2, username: 'Joseph', age: 35 },
    { id: 3, username: 'Joe', age: 30 },
  ];
}
