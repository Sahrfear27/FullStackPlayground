import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';
//
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="{ backgroundcolor: true, margin: true, padding: true }">
      <div>
        <h1>Child 2 Component</h1>
        <button (click)="send()">Send</button>
      </div>
    </div>
  `,
  styles: `
  .backgroundcolor{
    background-color:#F0F8FF;
  }
  .margin {
    margin: 25px;
  }
  .padding {
    padding: 10px;
  }
  `,
})
export class Child2Component {
  // Declare and output that will be used to emit the data
  msgFromChild = output<string>();

  // Create a function to emit the message
  send() {
    this.msgFromChild.emit(
      'Hello Parent Component. This message is coming from the child component'
    );
  }
}
