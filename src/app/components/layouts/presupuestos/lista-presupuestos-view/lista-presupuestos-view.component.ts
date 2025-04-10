import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../../../providers/Device-Service.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-presupuestos-view',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule
        ],
  templateUrl: './lista-presupuestos-view.component.html',
  styleUrl: './lista-presupuestos-view.component.css'
})
export class ListaPresupuestosViewComponent implements OnInit{

  btnPresupuesto: string = '';
  deviceType: string = '';

  constructor(private router: Router, private deviceService: DeviceService) {}

  ngOnInit() {
    this.deviceType = this.deviceService.isMobile() ? 'Móvil' : 'Computadora';

    console.log(this.deviceType);
    if(this.deviceType == 'Móvil')
    {
      this.btnPresupuesto = 'Nuevo';
    }else{
      this.btnPresupuesto = 'Nuevo Presupuesto';
    }
  }

  nuevoPresupuesto()
  {
    this.router.navigate(['Presupuesto/Persona']);
  }

}
