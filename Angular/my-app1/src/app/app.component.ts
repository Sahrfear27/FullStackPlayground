import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableComponent } from './counter.component';
import { ComputedSignalComponent } from './computed-signal.component';
import { EffectComponent } from './effect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WritableComponent,
    ComputedSignalComponent,
    // EffectComponent,
  ],
  template: `
    <app-counter />
    <app-computed-signal />
    <!-- <app-effect /> -->
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'my-app1';
}
