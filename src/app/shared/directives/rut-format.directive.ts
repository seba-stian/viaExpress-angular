import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRutFormat]',
  standalone: false
})
export class RutFormatDirective {
  @HostListener('input', ['$event'])
  onInput(event: any) {
    let inputVal = event.target.value;
    inputVal = inputVal.replace(/[^\dkK]/g, '');

    let rutNum = inputVal.slice(0, -1);
    let rutDv = inputVal.slice(-1);

    if (rutNum || rutDv) {
      rutNum = rutNum.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      event.target.value = rutNum + '-' + rutDv;
    } else {
      event.target.value = '';
    }
  }
}
