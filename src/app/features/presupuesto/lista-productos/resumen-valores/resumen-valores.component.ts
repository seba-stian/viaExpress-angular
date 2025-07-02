import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Presupuesto } from '../../../../core/models/presupuestoModel/presupuesto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-valores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-valores.component.html',
  styleUrl: './resumen-valores.component.css'
})
export class ResumenValoresComponent implements OnInit {

  @Input() resumen!: Presupuesto;
  @Output() descuentoCambiado = new EventEmitter<number>();
  inputDescuento: string = '';

  ngOnInit() {
    this.inputDescuento = this.formatearCLP(this.resumen.descuento || 0);
  }

  onDescuentoManualChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value;
  
    // Elimina todo excepto números (incluyendo miles separados por puntos y $)
    const cleanedValue = rawValue.replace(/[^0-9]/g, '');
    const value = parseInt(cleanedValue, 10);
  
    if (isNaN(value)) {
      this.descuentoCambiado.emit(0); // Si no hay un número válido, emitimos 0
    } else {
      this.descuentoCambiado.emit(value); // Emitimos el número limpio
    }
  
    this.inputDescuento = rawValue; // Para mantener lo que ve el usuario
  }

  // Al hacer foco: mostrar solo el número
  mostrarValorNumerico() {
    // this.inputDescuento = this.resumen.descuento?.toString() ?? '';
    this.inputDescuento = '';
  }
  
  // Al salir del input: formatear
  formatearDescuento() {
    this.inputDescuento = this.formatearCLP(this.resumen.descuento ?? 0);
  }
  
  // Formateo CLP sin decimales
  formatearCLP(valor: number): string {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(valor);
  }

}
