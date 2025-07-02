import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { ProductoCarruselComponent } from './lista-productos/producto-carrusel/producto-carrusel.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PresupuestoRoutingModule,
    ProductoCarruselComponent
  ]
})
export class PresupuestoModule { }
