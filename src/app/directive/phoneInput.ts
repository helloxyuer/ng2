import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective {

  constructor(public control: NgModel, private el: ElementRef) { }

  /*@HostListener('keyup', ['$event']) update(event) {
    this.checkPhoneNumber(event.target.value);
  }*/

  @HostListener('keyup', ['$event']) input(event) {
    const num = event.target.value;
    console.log(num);
    const afternum = num.replace(/\D+/g, '');
    this.control.viewToModelUpdate(afternum);
    event.target.value = afternum;
  }
}
