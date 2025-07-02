import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  standalone: true,
  selector: 'app-toast-producto',
  imports: [CommonModule],
  templateUrl: './toast-producto.component.html',
  styleUrl: './toast-producto.component.css'
})
export class ToastProductoComponent {
  @Input() toastDuracion: number = 5;

  constructor(private sanitizer: DomSanitizer) {}

  toastMensaje: string = '';
  toastTipo: 'success' | 'warning' | 'error' = 'success';
  mostrarToast: boolean = false;
  contador: number = 3;
  private intervalId: any;

  mostrar(tipo: 'success' | 'warning' | 'error', mensaje: string) {
    this.toastTipo = tipo;
    this.toastMensaje = mensaje;
    this.contador = this.toastDuracion;
    this.mostrarToast = true;

    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.contador--;
      if (this.contador <= 0) {
        this.mostrarToast = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  get toastClases(): string {
    switch (this.toastTipo) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return '';
    }
  }

  get toastIcon(): SafeHtml {
    let svg = '';
  
    switch (this.toastTipo) {
      case 'success':
        svg = `<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l5-5-1.414-1.414L9 11.172 7.414 9.586 6 11l3 3z" clip-rule="evenodd"/>
        </svg>`;
        break;
      case 'warning':
        svg = `<svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.518 11.591c.75 1.335-.213 2.985-1.742 2.985H3.48c-1.53 0-2.492-1.65-1.742-2.985L8.257 3.1zM9 7a1 1 0 112 0v4a1 1 0 11-2 0V7zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>`;
        break;
      case 'error':
        svg = `<svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-4.707-2.707a1 1 0 00-1.414-1.414L10 8.586 8.121 6.707a1 1 0 10-1.414 1.414L8.586 10l-1.879 1.879a1 1 0 101.414 1.414L10 11.414l1.879 1.879a1 1 0 001.414-1.414L11.414 10l1.879-1.879z" clip-rule="evenodd"/>
        </svg>`;
        break;
    }
  
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
