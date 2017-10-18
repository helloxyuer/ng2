import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective {

  constructor(private el: ElementRef) { }

  @Input('appPhoneInput') phoneNumber: string;

  @HostListener('onchange') onchange() {
    this.checkPhoneNumber(this.phoneNumber);
  }

  private checkPhoneNumber(phoneNumber: string) {
    console.log(phoneNumber);
  }
}
