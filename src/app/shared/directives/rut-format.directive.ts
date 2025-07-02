import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appRutFormat]'
})
export class RutFormatDirective {

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const cleanValue = value.replace(/[^\dkK]/gi, '').toUpperCase();
    const formattedRut = this.formatRut(cleanValue);
    this.control.control?.setValue(formattedRut, { emitEvent: false });
  }

  private formatRut(rut: string): string {
    if (!rut || rut.length < 2) return rut;

    const body = rut.slice(0, -1).replace(/\D/g, '');
    const dv = rut.slice(-1);
    const reversed = body.split('').reverse().join('');
    const withDots = reversed.replace(/(\d{3})(?=\d)/g, '$1.').split('').reverse().join('');
    return `${withDots}-${dv}`;
  }
}
