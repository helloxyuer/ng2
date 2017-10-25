import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective {

  constructor(public control: NgModel, private el: ElementRef) { }

  @HostListener('keyup', ['$event']) update(event) {
    this.checkPhoneNumber(event.target.value);
  }

  checkPhoneNumber(phoneNumber: string) {
    phoneNumber = phoneNumber.replace(/\D+/g, '');
    console.log(phoneNumber);
    this.control.viewToModelUpdate(phoneNumber);
  }
}
