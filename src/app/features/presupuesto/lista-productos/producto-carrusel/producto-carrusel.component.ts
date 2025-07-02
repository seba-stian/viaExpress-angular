import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../core/models/productoModel/producto.model';
import { DeviceService } from '../../../../core/models/Device-Service.model';
import { TruncateWebPipe } from '../../../../pipes/truncate-movil-nombreProducto.pipe';

@Component({
  selector: 'app-producto-carrusel',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TruncateWebPipe,
  ],
  templateUrl: './producto-carrusel.component.html',
  styleUrl: './producto-carrusel.component.css'
})
export class ProductoCarruselComponent implements OnInit{
  
  @Input() productosSeleccionado: Producto[] = [];
  @Output() eliminarProducto = new EventEmitter<number>(); // Emitirá el Id del producto
  @Output() stockProducto = new EventEmitter<{ id: number; stock: number }>(); // Emitirá el Id del producto
  @Output() mostrarModal = new EventEmitter<void>();
  @Output() mostrarModalConTitulo = new EventEmitter<{ titulo: string; id: number }>();
  isModalVisible: boolean = false;  // Controla la visibilidad del modal
  isModalFinalVisible: boolean = false; 
  isMobile:boolean = false;  
  // qty: number = 1;
  selectedColor: string = '';
  Math = Math;

  constructor(private deviceService: DeviceService) {}

    ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    // console.log(this.productosSeleccionado);
  }

  actualizarStock(idStockProd: string) {
    // Emitir al componente padre si es necesario
    const stockValue = idStockProd.split('-')[0]; // Extrae el stock del string
    const idProdValue = idStockProd.split('-')[1]; // Extrae el id del producto del string
    console.log("Stock actualizado:", idStockProd);
    this.stockProducto.emit({
      id: parseInt(idProdValue), 
      stock: parseInt(stockValue)
    });
  }

  quitarProducto(index: number): void {
    const id = this.productosSeleccionado[index].Id_VE_Productos;
    this.eliminarProducto.emit(id); // Lanza el evento al padre
  }
  
  MostrarModalEditar(idVeProducto: number) {
    console.log("Hijo emite");
    this.mostrarModal.emit();
    this.mostrarModalConTitulo.emit({
      titulo: "Editar Producto",
      id: idVeProducto
  });
  }

  // Método para cerrar el modal
  closeModal() {
    console.log("se cierra el modal en el carrusel");
    this.isModalVisible = false;
  }
}
