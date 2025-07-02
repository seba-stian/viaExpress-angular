import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../../core/models/Device-Service.model';
import { PresupuestoService } from '../../../core/services/presupuesto.service';
import { PresupuestoFiltrado } from '../../../core/models/presupuestoModel/presupuestoFiltrado.model';

@Component({
  selector: 'app-lista-presupuestos-view',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          RouterModule,
        ],
  templateUrl: './lista-presupuestos-view.component.html',
  styleUrl: './lista-presupuestos-view.component.css'
})
export class ListaPresupuestosViewComponent implements OnInit{

  NombrePresupuesto?: string = '';
  Pagina: number = 1;
  Tamanio: number = 5;
  Orden?: string = 'Id_VE_Presupuesto';
  AscDesc?:string = 'desc';
  presupuestos:PresupuestoFiltrado[] = [];

  totalRegistros: number = 0;
  totalPaginas: number = 1;

  btnPresupuesto: string = '';
  deviceType: string = '';
  Math = Math;

  constructor(private router: Router, private deviceService: DeviceService, private presupuestoService: PresupuestoService) {}

  ngOnInit() {
    this.deviceType = this.deviceService.isMobile() ? 'Móvil' : 'Computadora';
    this.cargarPresupuestos();
    console.log(this.deviceType);
    if(this.deviceType == 'Móvil')
    {
      this.btnPresupuesto = 'Nuevo';
    }else{
      this.btnPresupuesto = 'Nuevo Presupuesto';
    }
  }

  async cargarPresupuestos() {
    this.presupuestos = await this.presupuestoService.obtenerPresupuestoFiltrado(
      this.Pagina,
      this.Tamanio,
      this.NombrePresupuesto,
      this.Orden,
      this.AscDesc
    )

    this.totalRegistros = 7; // 🔁 reemplaza esto por lo real
    this.totalPaginas = Math.ceil(this.totalRegistros / this.Tamanio);
    console.log('Total de registros:', this.totalRegistros);
    console.log('Total de paginas:', this.totalPaginas);
  }

  onInputChange(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
  
    if (valor.length >= 3) {
      const nuevoCaracter = valor[valor.length - 1];
      console.log('Carácter ingresado después del tercer caracter:', nuevoCaracter);
      this.NombrePresupuesto = valor;
      this.cargarPresupuestos();
    }else
    {
      this.NombrePresupuesto = "";
      this.cargarPresupuestos();
    }
  }


  nuevoPresupuesto()
  {
    this.router.navigate(['Presupuesto/Persona']);
  }

  paginaAnterior() {
    if (this.Pagina  > 1) {
      this.Pagina --;
      this.cargarPresupuestos();
    }
  }

  paginaSiguiente() {
    if (this.Pagina < this.totalPaginas) {
      this.Pagina ++;
      this.cargarPresupuestos();
    }
  }

  irAPagina(pagina: number) {
    this.Pagina = pagina;
    this.cargarPresupuestos();
  }

}
