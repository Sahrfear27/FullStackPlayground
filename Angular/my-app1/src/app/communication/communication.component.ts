import { Component, signal } from '@angular/core';
import { Child1Component } from './child1.component';
import { NgClass, NgStyle } from '@angular/common';
import { Child2Component } from './child2.component';
import { ChangeBackgroundDirective } from './change-background.directive';
import { Child3Component } from './child3.component';
type UserDetail = {
  id: number;
  username: string;
  age: number;
};
@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [
    Child1Component,
    NgClass,
    Child2Component,
    ChangeBackgroundDirective,
    Child3Component,
    NgStyle,
  ],
  template: `
    <div [ngClass]="{ border: true, background: true, padding: true }">
      <p>communication works!</p>
      <h5>Inside the Parent Component</h5>
      <div>
        <!-- Child Component1 -->
        <app-child1
          [$msgFromParent]="msgToChildOne"
          [$usersFromParent]="users"
          [$id]="estateId"
        />
      </div>
      <div>
        <!-- Child component2 -->
        <app-child2 (msgFromChild)="receiveMsg($event)" />
        <p appChangeBackground>
          The message from Child 2 is :{{ $displaymsg() }}
        </p>
      </div>
      <div [ngStyle]="{ background: 'brown' }">
        <!-- Child component3 -->
        <p>This message is from Child3 :{{ $data() }}</p>
        <button (click)="sendToChild3()">Send to Child3</button>
        <app-child3 [($msg)]="$data" />
      </div>
    </div>
  `,
  styles: `
  .border {border:2px solid black}
  .background {background-color:grey}

  `,
})
export class CommunicationComponent {
  // This is the parent component sending the data to child component 1
  msgToChildOne = 'Hello First Child Component';
  estateId = '2odsiw923jens0238';
  users: UserDetail[] = [
    { id: 1, username: 'Alves', age: 20 },
    { id: 2, username: 'Joseph', age: 35 },
    { id: 3, username: 'Joe', age: 30 },
  ];

  // Inside the parent component receiving data from the child component
  $displaymsg = signal<string>('');
  receiveMsg(event: string) {
    this.$displaymsg.set(event);
  }

  /**
   Sending data to child 3 using model.
   1. Create an event that will be use to send the data.
   2. When the event is trigger, send the data to the child components
   3. Render the child component using banana in a box syntax and pass the data
   * */
  $data = signal('');
  sendToChild3() {
    this.$data.set('Hello Child3, this is parent component');
  }
}
