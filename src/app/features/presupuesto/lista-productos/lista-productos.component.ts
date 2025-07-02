import { CommonModule } from '@angular/common';
import { Component, EventEmitter, numberAttribute, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalProductosComponent } from '../../../shared/layout/modals/modal-productos/modal-productos.component';
import { ProductoService } from '../../../core/services/producto.service';
import { CategoriaProducto } from '../../../core/models/productoModel/categoriaProducto.model';
import { ProductoCarruselComponent } from './producto-carrusel/producto-carrusel.component';
import { DeviceService } from '../../../core/models/Device-Service.model';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { listAnimation, fadeAnimation } from '../../../shared/animations/animationsComponent';
import { Producto } from '../../../core/models/productoModel/producto.model';
import { TruncateMobilePipe } from '../../../pipes/truncate-movil-nombreProducto.pipe';
import { ToastProductoComponent } from '../../../shared/layout/modals/modal-toasts-productos/toast-producto.component';
import { ResumenValoresComponent } from './resumen-valores/resumen-valores.component';
import { Presupuesto } from '../../../core/models/presupuestoModel/presupuesto.model';


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
          ProductoCarruselComponent,
          AutoCompleteModule,
          TruncateMobilePipe,
          ToastProductoComponent,
          ResumenValoresComponent
        ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css',
  animations: [listAnimation, fadeAnimation]
})

export class ListaProductosComponent implements OnInit{

  @ViewChild(ToastProductoComponent) toast!: ToastProductoComponent;
  productoCarruselEditar: Producto | null = null;
  isModalVisible: boolean = false;  // Controla la visibilidad del modal
  isModalFinalVisible: boolean = false; 
  isProductoSelected: boolean = false; // Controla si hay un producto seleccionado
  categoriasSelect: CategoriaProducto[] = []; // Almacena las categorías de productos
  idCategoriaSelected: number | null; // Almacena id de la categoria seleccionada
  productosFiltrado: Producto[] = []; // Almacena los productos filtrados por nombre desde el api para mostar en el autocomplete
  productosSeleccionado: Producto[] = []; // Almacena los productos seleccionados por el usuario
  productosAgrupados: Producto[][] = [];// Almacena los productos agrupados en sub-arrays de 6 elementos
  filteredProducts: { name: string }[] = [];
  selectedProduct: any = '';
  currentIndex = 0;
  isMobile:boolean = false;
  modalTitle: string = '';
  mostrar: boolean = false;
  contador: number = 6;
  intervalId: any;
  resumenValores: Presupuesto = {
    precio: 0,
    descuento: 0,
    iva: 0,
    totalPresupuesto: 0,
    Id_Ve_Presupuesto: 0,
    Id_Ve_Usuario: 0,
    Id_Ve_Vehiculo: 0,
    nombrePresupuesto: ''
  };

  constructor(private productoService: ProductoService, private deviceService: DeviceService) { 
  }
  
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.ObtenerCategoriasProductos();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.productosAgrupados.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.productosAgrupados.length) % this.productosAgrupados.length;
  }

  calcularResumen() {
    const precioOriginal = this.productosSeleccionado.reduce(
      (acc, prod) => acc + ((prod.Precio || 0) * (prod.StockInicial || 1)),
      0
    );
  
    const descuentoManual = this.resumenValores.descuento ?? 0;
    const precioConDescuento = precioOriginal - descuentoManual;
    const iva = +(precioConDescuento * 0.19).toFixed(0);
    const total = +(precioConDescuento + iva).toFixed(0);
  
    this.resumenValores = {
      precio: precioOriginal,
      descuento: descuentoManual,
      iva,
      totalPresupuesto: total,
      Id_Ve_Presupuesto: this.resumenValores.Id_Ve_Presupuesto,
      Id_Ve_Usuario: this.resumenValores.Id_Ve_Usuario,
      Id_Ve_Vehiculo: this.resumenValores.Id_Ve_Vehiculo,
      nombrePresupuesto: this.resumenValores.nombrePresupuesto
    };
  }


  onActualizarDescuentoManual(valor: number) {
    this.resumenValores.descuento = valor;
    this.calcularResumen();
  }
  
  agruparProductos(productos: Producto[], cantProd: number = 6): Producto[][] {
    const result: Producto[][] = [];
    // Divide el array en sub-arrays de tamaño máximo 6.
    //  1.- Toma desde i hasta i + chunkSize (sin incluirlo).
    //  2.- Extrae un grupo de chunkSize productos.
    //  3.- Ese grupo se agrega a result con result.push(...).
    for (let i = 0; i < productos.length; i += cantProd) {
      result.push(productos.slice(i, i + cantProd));
    }
    return result;
  }

  // Método para mostrar las categorías de productos en el select
  async ObtenerCategoriasProductos(){
    const categoriasApi = await this.productoService.ObtenerCategoriasProductos() as CategoriaProducto[];
    this.categoriasSelect = categoriasApi;
  }

  //despliega la lista de productos para el autocomplete
  async filterProducts(event: any) {
    const query = event.query.toLowerCase();

    const productosfiltrado = await this.productoService.ObtenerProductosNombre(query, this.idCategoriaSelected) as Producto[];

    this.productosFiltrado = productosfiltrado.filter(product =>
      product.NombreProducto.toLowerCase().includes(query)
    );

    this.filteredProducts = productosfiltrado.map(product => ({ name: product.NombreProducto }));
  }

  //actualizar stock producto
  onActualizarStockProducto(data: { id: number, stock: number }): void {
    const producto = this.productosSeleccionado.find(p => p.Id_VE_Productos === data.id);
  
    if (producto) {
      producto.StockInicial = data.stock;
    }
  
    this.isProductoSelected = this.productosSeleccionado.length > 0;
  
    this.calcularResumen();
  }

  onEliminarProducto(id: number): void {
    this.productosSeleccionado = this.productosSeleccionado.filter(
      p => p.Id_VE_Productos !== id
    );

    if (this.productosSeleccionado.length === 0) {
      this.isProductoSelected = false;
    }

    this.calcularResumen();
    //se reagrupan los productos seleccionados
    this.productosAgrupados = this.agruparProductos(this.productosSeleccionado, 6);
    this.toast.mostrar('success', 'Producto eliminado exitosamente');
  }

  //obtiene el id de la categoria seleccionada
  onSelectCategoria(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.idCategoriaSelected = selectedValue ? Number(selectedValue) : null;
  }

  onSelectProducto(event: any) {
    const productoSeleccionado = event.value;
  
    if (!productoSeleccionado || !productoSeleccionado.Id_VE_Productos) {
      return;
    }
  
    const yaExiste = this.productosSeleccionado.some(
      p => p.Id_VE_Productos === productoSeleccionado.Id_VE_Productos
    );

    if (!yaExiste) {
      this.agregarProductoCarrusel(event.value);
      // this.productosSeleccionado.push(event.value);
      // this.productosAgrupados = this.agruparProductos(this.productosSeleccionado, 6);
      // this.isProductoSelected = true;
    }
  }

  agregarProductoCarrusel(producto: any){

    this.productosSeleccionado.push(producto);
    this.productosAgrupados = this.agruparProductos(this.productosSeleccionado, 6);
    this.isProductoSelected = true;
    this.calcularResumen();
  }
  
  //modal para editar un producto desde componente carrusel
  abrirModalConTitulo(data: { titulo: string; id: number }) {
    this.modalTitle = "Editar Producto";
    this.isModalVisible = true;
    const productoEditar = this.productosSeleccionado.find(
      p => p.Id_VE_Productos === data.id
    );
    if(productoEditar){
      this.productoCarruselEditar = { ...productoEditar };
    }else{
      console.warn("Producto no encontrado para editar:", data.id);
    }
  }
  
  async guardarProducto(producto: any) {
    
    const productSave = await this.productoService.GuardarProducto(producto);
    if(productSave){
      this.toast.mostrar('success', 'Producto guardado exitosamente');
      this.agregarProductoCarrusel(productSave);
    }else{
      this.toast.mostrar('error', 'Error al guardar el producto');
    }

    this.closeModal();
  }

  async editarProducto(producto: any) {

    const productEdit = await this.productoService.EditarProducto(producto);

    const index = this.productosSeleccionado.findIndex(
      p => p.Id_VE_Productos === productEdit.Id_VE_Productos
    );

    console.log("Producto editado:", productEdit);
    console.log("Producto editado:", JSON.stringify(this.productosSeleccionado));

    if (index !== -1 && productEdit.IdVeProducto !== 0) {
      this.productosSeleccionado[index] = productEdit;
      this.productosAgrupados = this.agruparProductos(this.productosSeleccionado, 6);
      this.toast.mostrar('success', 'Producto actualizado exitosamente');
    } else {
      this.toast.mostrar('error', 'Producto no encontrado para actualizar.');
    }
    this.closeModal();
  }

  // Método para abrir el modal
  abrirModal() {
    console.log("Se muestra modal desde hijo");
    this.modalTitle = "Crear Producto";
    this.isModalVisible = true;
  }

  // Método para cerrar el modal
  closeModal() {
    console.log("se cierra el modal en al lista");
    this.isModalVisible = false;
  }
}
