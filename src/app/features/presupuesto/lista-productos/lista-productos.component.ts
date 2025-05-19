import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalProductosComponent } from '../../../shared/layout/modals/modal-productos/modal-productos.component';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaProducto } from '../../../core/models/productoModel/categoriaProducto.model';
import { ProductoCarruselComponent } from './producto-carrusel/producto-carrusel.component';
import { DeviceService } from '../../../core/models/Device-Service.model';

interface Product {
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          ModalProductosComponent,
          ProductoCarruselComponent
        ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent implements OnInit{

  isModalVisible: boolean = false;  // Controla la visibilidad del modal
  isModalFinalVisible: boolean = false; 
  categoriasSelect: CategoriaProducto[] = []; // Almacena las categorías de productos

  constructor(private productoService: ProductoService, private deviceService: DeviceService) {}
  
  ngOnInit(): void {
    this.ObtenerCategoriasProductos();
  }

  currentIndex = 0;

  products: Product[] = [
    {
      title: 'PlayStation®5 Console – 1TB',
      price: 499,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
    },
    {
      title: 'Apple Watch SE [GPS 40mm]',
      price: 699,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
    }
    // Puedes añadir más productos aquí
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

  async ObtenerCategoriasProductos(){

    const categoriasApi = await this.productoService.obtenerCategoriasProductos() as CategoriaProducto[];
    this.categoriasSelect = categoriasApi;
  }

  cantidadColumnas(){
    const deviceType = this.deviceService.isMobile() ? 'Móvil' : 'Computadora';
    if(deviceType == 'Móvil')
    {
    }
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
