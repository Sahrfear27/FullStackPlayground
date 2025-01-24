import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective {
  #element = inject(ElementRef); // Provide access to the host element
  #renderer2 = inject(Renderer2);

  ngOnInit() {
    this.#element.nativeElement.style.fontSize = '30px';
    this.#renderer2.setStyle(this.#element.nativeElement, 'font-size', '30px');
  }

  @HostListener('mouseover') handleMouseOver() {
    this.#renderer2.setStyle(
      this.#element.nativeElement,
      'background-color',
      'blue'
    );
  }
  // HostListiners: It means listen to the host elements and execute the function the comes next
  @HostListener('mouseleave') handleMouseLeave() {
    this.#renderer2.setStyle(
      this.#element.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
