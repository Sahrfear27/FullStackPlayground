import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>The counter current value is {{ $counter() }}</p>
      <p>The counter value is Prime: {{ $is_prime() }}</p>
    </div>
  `,
  styles: ``,
})
export class EffectComponent {
  $count = signal(2);
  $counter = signal(0);

  $is_prime = computed(() => {
    const value = this.$counter();
    if (value < 2) {
      return false;
    }
    for (let i = 2; i <= value - 1; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  });
  constructor() {
    // Setting the signal's value in an interval
    setInterval(() => {
      this.$count.set(10);
    }, 5000);
    setInterval(() => {
      this.$counter.update((pre) => pre + 1);
    }, 1000);
    // Creating an effect to observe changes in the signal
    effect(() => {
      // console.log(`The current count is: ${this.$count()}`);
      if (this.$is_prime() === true) {
        console.log(`Found Prime Number`, this.$counter());
      }
    });
  }
}
