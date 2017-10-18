import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[phoneInput]'
})
export class PhoneInputDirective {

  constructor(private el: ElementRef) { }

  @Input('phoneInput') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
