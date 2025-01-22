import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableComponent } from './counter.component';
import { ComputedSignalComponent } from './computed-signal.component';
import { EffectComponent } from './effect.component';
import { PipesControlFlowComponent } from './pipes.controlflow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesControlFlowComponent],
  template: `
    <!-- <app-counter /> -->
    <!-- <app-computed-signal /> -->
    <!-- <app-effect /> -->
    <app-pipes />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'my-app1';
}
