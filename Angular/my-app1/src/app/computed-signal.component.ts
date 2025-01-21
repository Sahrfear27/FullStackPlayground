import { Component, computed, CSP_NONCE, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>computed-signal works!</p>
      <p>First Count {{ $count() }}</p>
      <p>Double Count {{ doubleCount() }}</p>
    </div>
  `,
  styles: ``,
})
export class ComputedSignalComponent {
  // Computed signal, they are read only. They are computed based on the signal you defined

  constructor() {
    console.log(this.doubleCount());
  }
  $count = signal(2);
  doubleCount = computed(() => {
    return this.$count() * 2;
  });
}
