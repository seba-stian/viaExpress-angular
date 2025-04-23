import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../../core/models/Device-Service.model';
import { PresupuestoService } from '../../../core/services/presupuesto.service';
import { Presupuesto } from '../../../core/models/presupuestoModel/presupuesto.model';
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
  Pagina?: string = '1';
  Tamanio?: string = '5';
  Orden?: string = 'Id_VE_Presupuesto';
  AscDesc?:string = 'desc';
  presupuestos:PresupuestoFiltrado[] = [];

  btnPresupuesto: string = '';
  deviceType: string = '';

  constructor(private router: Router, private deviceService: DeviceService, private presupuestoService: PresupuestoService) {}

  ngOnInit() {
    this.deviceType = this.deviceService.isMobile() ? 'Móvil' : 'Computadora';
    // async () => {
    //   console.log("se carga presupuesto");
    //   await this.PresupuestoDefault();
    // }
    this.PresupuestoDefault();
    console.log(this.deviceType);
    if(this.deviceType == 'Móvil')
    {
      this.btnPresupuesto = 'Nuevo';
    }else{
      this.btnPresupuesto = 'Nuevo Presupuesto';
    }
  }

  async PresupuestoDefault()
  {
    console.log('se cargan presupuestos');
    this.presupuestos = await this.presupuestoService.obtenerPresupuestoFiltrado(this.NombrePresupuesto,this.Pagina,this.Tamanio,this.Orden, this.AscDesc);
  }

  // setFiltroUsuario() {
  //   return {
  //     NombrePresupuesto: this.NombrePresupuesto,
  //     Pagina: this.Pagina,
  //     Tamanio: this.Tamanio,
  //     Orden: this.Orden,
  //     AscDesc: this.AscDesc
  //   };
  // }

  nuevoPresupuesto()
  {
    this.router.navigate(['Presupuesto/Persona']);
  }

}
