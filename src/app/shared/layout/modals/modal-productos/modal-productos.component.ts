import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaProducto } from '../../../../core/models/productoModel/categoriaProducto.model';
import { ProductoService } from '../../../../core/services/producto.service';
import { Producto } from '../../../../core/models/productoModel/producto.model';
import { ToastProductoComponent } from '../modal-toasts-productos/toast-producto.component';
import { AlertasFormsComponent } from '../../alerts/alertas-forms/alertas-forms.component';

@Component({
  selector: 'app-modal-productos',
  standalone: true,
    imports: [
            FormsModule,
            CommonModule,
            ReactiveFormsModule,
            ToastProductoComponent,
            AlertasFormsComponent
          ],
  templateUrl: './modal-productos.component.html',
  styleUrl: './modal-productos.component.css'
})
export class ModalProductosComponent implements OnInit{

  @ViewChild('fileInput') fileInput!: any;
  @ViewChild(ToastProductoComponent) toast!: ToastProductoComponent;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();  // Emite el evento de cerrar
  @Output() productoParaEditar = new EventEmitter<any>();
  @Output() productoParaGuardar = new EventEmitter<any>();
  @Input() productoModalEditar: Producto | null = null; // Recibe el producto seleccionado para editar desde el componente padre
  @Input() isVisible: boolean = true;  // Recibe la visibilidad desde el componente padre
  @Input() tituloModal: string = '';
  selectedFile: File | null = null; // Almacena el archivo seleccionado
  categoriasSelect: CategoriaProducto[] = []; // Almacena las categorías de productos
  productoForm: FormGroup;
  nombreArchivoExistente: string = '';
  // Variables para mostrar alertas
  mostrarAlerta: boolean = false;
  mensajeAlerta: string = '';
  tipoAlerta: 'error' | 'warning' | 'success' = 'error';

  constructor(private productoService: ProductoService, private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      IdVeProducto: [null], // Este campo se usará para editar el producto
      NombreProducto: ['', Validators.required],
      Precio: ['', [Validators.required, Validators.min(0)]],
      Descripcion: ['', Validators.required],
      NombreImagen: [''],
      IdVeCategoriasProductos: ['', Validators.required],
      Fabricante: ['', Validators.required],
      // FileImage: [null], // Aquí almacenaremos el archivo
    });
  }

  ngOnInit(): void {
    this.ObtenerCategoriasProductos();
  }
  
  async ObtenerCategoriasProductos(){
    const categoriasApi = await this.productoService.ObtenerCategoriasProductos() as CategoriaProducto[];
    this.categoriasSelect = categoriasApi;
  }

  onSelectCategoria(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.productoForm.patchValue({ IdVeCategoriasProductos: selectedValue });
  } 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productoModalEditar'] && this.productoModalEditar) {
      this.mapearProductoAFormData();
    }
  }

  private mapearProductoAFormData(): void {
    if (this.productoModalEditar) {
      this.productoForm.patchValue({
        IdVeProducto: this.productoModalEditar.Id_VE_Productos,
        NombreProducto: this.productoModalEditar.NombreProducto,
        Precio: this.productoModalEditar.Precio,
        Descripcion: this.productoModalEditar.Descripcion,
        NombreImagen: this.productoModalEditar.NombreImagen || '',
        IdVeCategoriasProductos: this.productoModalEditar.Id_VE_Categoria,
        Fabricante: this.productoModalEditar.Fabricante
      });
  
      // this.nombreArchivoExistente = this.productoModalEditar.NombreImagen || '';
    }
  }

  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const maxSize = 20 * 1024 * 1024; // 20MB

    if (file && file.size <= maxSize) {
      const extension = file.name.split('.').pop()?.toLowerCase();
      const allowed = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

      if (extension && allowed.includes(extension)) {
        this.selectedFile = file; // ✅ Guardar en una variable aparte
        // this.productoForm.patchValue({ FileImage: file });
        // this.productoForm.get('FileImage')?.updateValueAndValidity();
      } else {
        alert('Extensión no permitida');
      }
    } else {
      alert('Archivo demasiado grande (máx 20MB)');
    }
  }

  async guardarProducto() {
    if (this.productoForm.invalid) {
      this.mensajeAlerta = 'Por favor, completa todos los campos obligatorios.';
      this.productoForm.markAllAsTouched(); // Fuerza mostrar errores
      this.tipoAlerta = 'warning';
      this.mostrarAlerta = true;
      console.log("Formulario: "+JSON.stringify(this.productoForm.value));
      setTimeout(() => this.mostrarAlerta = false, 5000);
      return;
    }

    const formDataToSend = new FormData();
    const formValue = this.productoForm.value;

    formDataToSend.append('IdVeProducto', formValue.IdVeProducto);
    formDataToSend.append('NombreProducto', formValue.NombreProducto);
    formDataToSend.append('Fabricante', formValue.Fabricante || '');
    formDataToSend.append('Precio', formValue.Precio.toString());
    formDataToSend.append('IdVeCategoria', formValue.IdVeCategoriasProductos.toString());
    formDataToSend.append('Descripcion', formValue.Descripcion || '');
    formDataToSend.append('NombreImagen', this.selectedFile?.name || '');
  
    if (this.selectedFile) {
      formDataToSend.append('ImagenData', this.selectedFile);
    }
  
    if(this.tituloModal == 'Editar Producto' && this.productoModalEditar) {
      this.productoParaEditar.emit(formDataToSend);
    }else {
      this.productoParaGuardar.emit(formDataToSend);
    }
    
    this.mostrarAlerta = false;
    this.close(); // Cierra y resetea el formulario
  }

  // Método para limpiar los datos
  resetForm() {
    this.productoForm.reset({
        NombreProducto: '',
        Precio: '',
        Descripcion: '',
        NombreImagen: '',
        IdVeCategoriasProductos: '',  // <- Esto pone la opción por defecto en el select
        Fabricante: '',
        FileImage: null
    });
    this.selectedFile = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  // Método para cerrar el modal  
  close() {
    console.log("modal se cierra: "+this.isVisible);
    this.resetForm(); // Resetea los datos cuando se cierra el modal
    this.closeModal.emit(false);  // Envía "false" para indicar que el modal debe cerrarse
  }

}
