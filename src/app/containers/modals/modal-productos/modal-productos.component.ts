import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.component.html',
  styleUrl: './modal-productos.component.css'
})
export class ModalProductosComponent implements OnInit{


  // Datos del formulario o cualquier valor que quieras limpiar
  formData: { NombreProducto: string, Precio: string, Categoria: string, Descripcion: string } =
  {NombreProducto: '', Precio: '', Categoria: 'Seleccione la Categoria', Descripcion: '' };

  @Input() isVisible: boolean = true;  // Recibe la visibilidad desde el componente padre
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();  // Emite el evento de cerrar

  ngOnInit(): void {
    
  }
  
  // Método para cerrar el modal  
  close() {
    console.log("modal se cierra: "+this.isVisible);
    this.resetForm(); // Resetea los datos cuando se cierra el modal
    this.closeModal.emit(false);  // Envía "false" para indicar que el modal debe cerrarse
  }
  // Método para limpiar los datos
  resetForm() {
    this.formData = { NombreProducto: '', Precio: '', Categoria: 'Seleccione la Categoria', Descripcion: '' }; // Resetea los valores del formulario
  }
}
