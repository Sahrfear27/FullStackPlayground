import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
  standalone: true,
})
export class ChangeBackgroundDirective {
  #element = inject(ElementRef); // Provide access to the host element
  #renderer2 = inject(Renderer2);

  @HostListener('click') handleClick() {
    this.#renderer2.setStyle(
      this.#element.nativeElement,
      'background-color',
      'green'
    );
    this.#renderer2.setStyle(this.#element.nativeElement, 'color', 'white');
  }
}
