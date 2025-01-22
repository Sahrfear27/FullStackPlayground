import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [NgStyle, NgClass],
  template: `
    <div>
      <h1>ngClass Dierectives</h1>
      @for (item of users; track item.id; let idx= $index, e= $even ) {
      <p [ngClass]="e ? 'special' : 'normal'">
        Items {{ idx }}: {{ item.name }}
      </p>
      }
    </div>
    <div
      [ngStyle]="{
        'background-color': 'grey',
        border: '2px-solid-red',
        padding: '100px'
      }"
    >
      <h1>ngStyle Directives</h1>
      @for(items of users; track items.id; let idx = $index, o=$odd){
      <p [ngStyle]="{ 'background-color': o ? 'blue' : 'trasparent' }">
        Items {{ idx }}: {{ items.name }}
      </p>
      }
    </div>
  `,
  styles: `
  .special {background-color:gray}
  .normal {background-color:transparent}
  `,
})
export class PipesControlFlowComponent {
  users = [
    { id: 1, name: 'sahrfear macarthy' },
    { id: 2, name: 'Alves' },
    { id: 4, name: 'Mary James' },
    { id: 5, name: 'Joseph Smith' },
    { id: 6, name: 'Kelvin Kline' },
    { id: 8, name: 'Olivia Diallo' },
  ];
}
