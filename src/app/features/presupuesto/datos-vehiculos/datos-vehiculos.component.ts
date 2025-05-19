import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../../../core/services/vehiculo.service';
import { MarcaVehiculo } from '../../../core/models/vehiculoModel/marcaVehiculo.model';
import { ModeloVehiculo } from '../../../core/models/vehiculoModel/modeloVehiculo.model';
import { FlowbiteService } from '../../../core/services/Flowbite.Service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-datos-vehiculos',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule
        ],
  templateUrl: './datos-vehiculos.component.html',
  styleUrl: './datos-vehiculos.component.css'
})
export class DatosVehiculosComponent implements OnInit, AfterViewInit{
  
  marcasSelect: MarcaVehiculo[] = [];
  modelosSelect: ModeloVehiculo[] = [];

  previewImages: string[] = ['https://flowbite.com/docs/images/carousel/carousel-1.svg'];
  selectedFiles: File[] = [];
  private carouselInstance: any;

  constructor(private vehiculoService: VehiculoService, private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.ObtenerMarcas();
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
      this.initCarousel(); // ⚠️ Usa el método limpio para inicializar
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
 
  

}
