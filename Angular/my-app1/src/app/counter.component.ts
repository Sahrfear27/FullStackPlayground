import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h4>Working With Signals</h4>
      <p>
        Signals are getter functions - calling them reads their value :{{
          $count()
        }}
      </p>
      <p>This is the timer signal {{ $timer() }}</p>
      <p>The sum of {{ $a() }} and {{ $b() }} is {{ $sum() }}</p>
    </div>
  `,
  styles: ``,
})
export class WritableComponent {
  constructor() {
    this.$count.set(10);
    setInterval(() => {
      this.$timer.update((time) => time + 1);
    }, 1000);
    this.$sum.update((preValue) => preValue + this.$a() + this.$b());
  }
  $sum = signal(0);
  $a = signal(10);
  $b = signal(20);
  // Writable Signales
  // Signals are getter functions - calling them reads their value.
  $count = signal(0);
  $timer = signal(0);
  // To change the value of a writable signal, either .set() it directly:
}
