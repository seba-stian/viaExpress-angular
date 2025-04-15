import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../../core/models/Device-Service.model';

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
