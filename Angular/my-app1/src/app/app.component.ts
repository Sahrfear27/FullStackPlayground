import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableComponent } from './counter.component';
import { ComputedSignalComponent } from './computed-signal.component';
import { EffectComponent } from './effect.component';
import { PipesControlFlowComponent } from './pipes.controlflow.component';
import { Exercise1StudentComponent } from './exercise1-student.component';
import { TemplateVariableComponent } from './template-variable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateVariableComponent],
  template: `
    <!-- <app-counter /> -->
    <!-- <app-computed-signal /> -->
    <!-- <app-effect /> -->
    <!-- <app-pipes /> -->
    <!-- <app-exercise1-student /> -->
    <app-template-variable />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'my-app1';
}
