import { NgStyle } from '@angular/common';
import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div
      [ngStyle]="{
        padding: '3px sold black',
        margin: '50px',
        background: 'white'
      }"
    >
      <h2>Model</h2>
      <button (click)="send()">Send to Parent</button>
      <p>The message receive from parent: {{ $msg() }}</p>
    </div>
  `,
  styles: ``,
})
export class Child3Component {
  /**
 Receive data from parent using model and render
 * */
  $msg = model<string>();

  /**
   Send data back to the parent
   
  */
  send() {
    this.$msg.set('Hello Father');
  }
}

// Child Component want to send data to the parent component using model using banana in a box syntax
// $msg = model<string>();
// send() {
//   this.$msg.set('Hello Parent');
// }
// $data = signal('Initial Value');
// sendToChild(){
//   this.$data.set("Hello F")
// }
