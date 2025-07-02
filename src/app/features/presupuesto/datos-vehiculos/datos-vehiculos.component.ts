import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiculoService } from '../../../core/services/vehiculo.service';
import { MarcaVehiculo } from '../../../core/models/vehiculoModel/marcaVehiculo.model';
import { ModeloVehiculo } from '../../../core/models/vehiculoModel/modeloVehiculo.model';
import { FlowbiteService } from '../../../core/services/Flowbite.Service';
import { Subscription } from 'rxjs';
import { PresupuestoFormService } from '../../../core/services/formPresupuesto.service';

@Component({
  selector: 'app-datos-vehiculos',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          ReactiveFormsModule
        ],
  templateUrl: './datos-vehiculos.component.html',
  styleUrl: './datos-vehiculos.component.css'
})
export class DatosVehiculosComponent implements OnInit, AfterViewInit,OnDestroy{
  
  marcasSelect: MarcaVehiculo[] = [];
  modelosSelect: ModeloVehiculo[] = [];

  formVehiculo!: FormGroup;

  previewImages: string[] = ['https://flowbite.com/docs/images/carousel/carousel-1.svg'];
  selectedFiles: File[] = [];
  private carouselInstance: any;
  private subs = new Subscription();

  constructor(private vehiculoService: VehiculoService, private flowbiteService: FlowbiteService,
    private fb: FormBuilder, private formService: PresupuestoFormService) {}

  async ngOnInit(): Promise<void> {
    this.ObtenerMarcas();

    this.formService.ejecutarFormVehiculo$.subscribe(() => this.ejecutarFormCliente());

    this.formVehiculo = this.fb.group({
      // IdVeVehiculo: ['', [Validators.required]],
      IdVeMarcaVehiculo: ['', Validators.required],
      IdVeModeloVehiculo: ['', Validators.required],
      Kilometraje: ['', Validators.required],
      NumeroChasis: ['', [Validators.required]],
      NumeroMotor: ['', [Validators.required]],
      Patente: ['', [Validators.required]],
      Falla: ['', [Validators.required]],
    });

    //informa del cambio a la suscripción del OnInit del padre
    this.subs.add(
      this.formService.ejecutarFormVehiculo$.subscribe(() => {
        const valido = this.formVehiculo.valid;
        if (!valido) {
          this.formVehiculo.markAllAsTouched();
        }
        this.formService.informarResultadoVehiculoFormulario(valido);
      })
    );

    const data = this.formService.getPresupuesto();
          console.log('Datos del presupuesto al cargar el componente:', data);
    //recupero la   info almacenada y la muestro al cargar el componente
    if (data.vehiculo) {
      const vehiculo = data.vehiculo; // O el que necesites

      await this.cargarModelosPorMarca( vehiculo.IdVeMarcaVehiculo);
      this.formVehiculo.patchValue({
        IdVeMarcaVehiculo: Number( vehiculo.IdVeMarcaVehiculo ?? ''),
        IdVeModeloVehiculo: Number(vehiculo.IdVeModeloVehiculo || ''),
        Kilometraje: vehiculo.Kilometraje || '',
        NumeroChasis: vehiculo.NumeroChasis || '',
        NumeroMotor: vehiculo.NumeroMotor || '',
        Patente: vehiculo.Patente || '',
        Falla: vehiculo.Falla || ''       
      });

      console.log('Formulario de vehículo cargado con datos:', this.formVehiculo.value);
    } else {
      console.warn('No hay datos de vehículo en el formulario de presupuesto');
    }
  }

  ejecutarFormCliente() {
    Object.keys(this.formVehiculo.controls).forEach(key => {
    const control = this.formVehiculo.get(key);
      console.log(`${key}: valid=${control?.valid}, value=${control?.value}`);
    });
    if (this.formVehiculo.valid) {
      this.formService.updatePresupuesto({
        vehiculo: this.formVehiculo.value,
        fileFotoVehiculo: this.selectedFiles,
        // marcaVehiculo: this.marcasSelect.filter(marca => marca.IdVeMarcaVehiculo === this.formVehiculo.value.IdVeMarcaVehiculo)[0]
      })
    } else {
      this.formVehiculo.markAllAsTouched();
      console.warn('Formulario vehiculo inválido');
    }
    console.log(this.formService.getPresupuesto());
  }

  async ObtenerMarcas(){     
    const marcasApi = await this.vehiculoService.obtenerMarcas() as MarcaVehiculo[];
    this.marcasSelect = marcasApi;
  }

  async setModelos(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const marcaId = selectElement.value as unknown as number;

    const modelosApi = await this.vehiculoService.obtenerModelos(marcaId) as ModeloVehiculo[];
    this.modelosSelect = modelosApi;    
  }

  async cargarModelosPorMarca(marcaId: number) {
    if (!marcaId) return;
  
    try {
      const modelosApi = await this.vehiculoService.obtenerModelos(marcaId) as ModeloVehiculo[];
      this.modelosSelect = modelosApi;
    } catch (error) {
      console.error('Error al cargar modelos:', error);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
  
    this.previewImages = [];
    this.selectedFiles = Array.from(input.files);
  
    const promises: Promise<void>[] = [];
  
    for (const file of this.selectedFiles) {
      const reader = new FileReader();
  
      const promise = new Promise<void>((resolve) => {
        reader.onload = (e: any) => {
          this.previewImages.push(e.target.result);
          resolve();
        };
      });
  
      reader.readAsDataURL(file);
      promises.push(promise);
    }
  
    Promise.all(promises).then(() => {
      this.initCarousel(); // Usa el método limpio para inicializar
    });
  }

  ngAfterViewInit(): void {
    this.initCarousel();
  }
  
  removeImage(index: number): void {
    this.previewImages.splice(index, 1);
  
    // Luego de eliminar, debes volver a inicializar el carrusel si usas Flowbite
    setTimeout(() => this.reinicializarCarousel(), 0);
  }
  
  reinicializarCarousel(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      const carouselElement = document.getElementById('carousel-example');
      if (!carouselElement) return;
  
      const items = this.previewImages.map((_, i) => ({
        position: i,
        el: document.getElementById(`carousel-item-${i}`)!,
      }));
  
      const indicators = this.previewImages.map((_, i) => ({
        position: i,
        el: document.getElementById(`carousel-indicator-${i}`)!,
      }));
  
      const options = {
        defaultPosition: 0,
        interval: 0,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: indicators,
        },
      };
  
      const instanceOptions = { id: 'carousel-example', override: true };
      const carousel = new flowbite.Carousel(carouselElement, items, options, instanceOptions);
  
      document.getElementById('data-carousel-prev')?.addEventListener('click', () => carousel.prev());
      document.getElementById('data-carousel-next')?.addEventListener('click', () => carousel.next());
    });
  }
  
  initCarousel(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      const carouselElement = document.getElementById('carousel-example');
      if (!carouselElement) return;
  
      setTimeout(() => {
        const items = this.previewImages.map((_, index) => ({
          position: index,
          el: document.getElementById(`carousel-item-${index}`)!,
        }));
  
        const indicators = this.previewImages.map((_, index) => ({
          position: index,
          el: document.getElementById(`carousel-indicator-${index}`)!,
        }));
  
        const options = {
          defaultPosition: 0,
          interval: 0,
          indicators: {
            activeClasses: 'bg-white dark:bg-gray-800',
            inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
            items: indicators,
          },
        };
  
        const instanceOptions = {
          id: 'carousel-example',
          override: true,
        };
  
        // ⚠️ Destruye la instancia anterior si existe
        if (this.carouselInstance) {
          this.carouselInstance.destroy();
        }
  
        // Crea nueva instancia
        this.carouselInstance = new flowbite.Carousel(carouselElement, items, options, instanceOptions);
  
        document.getElementById('data-carousel-prev')?.addEventListener('click', () => this.carouselInstance.prev());
        document.getElementById('data-carousel-next')?.addEventListener('click', () => this.carouselInstance.next());
      }, 0);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
