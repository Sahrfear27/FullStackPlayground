import { Component, ElementRef, viewChild } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [ChangeColorDirective],
  template: `
    <div>
      <h4 #header>
        Template Variables are also known as Ref that gives access to the
        reference element.Eg: Div, p, li
      </h4>
      <button (click)="header.style.background = 'red'">Click</button>
      <p appChangeColor>
        This Text color will change when the mouse is horver over
      </p>
    </div>
  `,
  styles: ``,
})
export class TemplateVariableComponent {
  $refToHeader = viewChild.required<ElementRef<HTMLDivElement>>('header');
  // Use the life cycle hook ngAfterViewCheck()
  ngAfterViewChecked() {
    console.log(this.$refToHeader().nativeElement.innerHTML);
  }
}
