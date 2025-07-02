// src/app/shared/validators/rut.validator.ts
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function rutValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const cleanRut = value.replace(/\./g, '').replace('-', '').toUpperCase();
    if (!/^\d{7,8}[0-9K]$/.test(cleanRut)) return { rutFormatoInvalido: true };

    const rut = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1);
    const calculatedDv = calcularDv(rut);

    if (dv !== calculatedDv) return { rutInvalido: true };
    return null;
}

function calcularDv(rut: string): string {
    let suma = 0;
    let multiplicador = 2;

    for (let i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut.charAt(i)) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dv = 11 - resto;

    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return dv.toString();
}
