import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  standalone: false,
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{

  isModalVisible: boolean = false;  // Controla la visibilidad del modal
  isModalFinalVisible: boolean = false; 
  
  ngOnInit(): void {
    
  }
  // Método para abrir el modal
  openModal() {
    console.log("estado modal: "+this.isModalVisible );
    this.isModalVisible = true;
  }

  // Método para cerrar el modal
  closeModal() {
    console.log("se cierra el modal en al lista");
    this.isModalVisible = false;
  }
}
