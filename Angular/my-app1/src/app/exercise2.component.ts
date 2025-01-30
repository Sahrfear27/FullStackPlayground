import { NgClass } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [NgClass, ChangeColorDirective],
  template: `
    <div>
      <h3>Question1 : Practice the following with signals</h3>
      <div>
        <p>Count: {{ $count() }}</p>
        <p appChangeColor>
          The value {{ $count() }} is Prime:
          <span [ngClass]="$is_prime() ? 'red' : 'green'">{{
            $is_prime()
          }}</span>
        </p>
      </div>
    </div>
  `,
  styles: `
  .red {color:red}
  .green {color:green}
  `,
})
export class Exercise2Component {
  $count = signal(0);
  $is_prime = computed(() => {
    let num = this.$count();
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
  constructor() {
    setInterval(() => {
      this.$count.update((pre) => pre + 1);
    }, 1000);
    effect(() => {
      if (this.$is_prime()) {
        console.log(`Found Prime Number ${this.$count()}`);
      }
    });
  }
}
