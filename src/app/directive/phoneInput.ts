import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective {

  constructor(public control: NgModel, private el: ElementRef) { }

  @Input('appPhoneInput') phoneNumber: string;

  @HostListener('keyup') update($event) {
    console.log(this.control);
    console.log($event);
    this.checkPhoneNumber(this.control.model);
    // this.el.nativeElement.style.border = "1px solid red";
  }

  checkPhoneNumber(phoneNumber: string) {
    phoneNumber = phoneNumber.replace(/\D+/g, '');
    this.control.viewToModelUpdate(phoneNumber);
  }
}
