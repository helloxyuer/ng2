import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective {

  constructor(public control: NgModel, private el: ElementRef) { }

  @Input('appPhoneInput') phoneNumber: string;

  @HostListener('keyup') update($event) {
    console.log(this.control)
    console.log(this.el)
    this.el.nativeElement.style.border = "1px solid red";
    this.checkPhoneNumber($event);
  }

  checkPhoneNumber(phoneNumber: string) {
    console.log('123321');
    this.control.viewToModelUpdate('123');
  }
}
