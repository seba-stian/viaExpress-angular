import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { ProductoCarruselComponent } from './lista-productos/producto-carrusel/producto-carrusel.component';


@NgModule({
  declarations: [
    ProductoCarruselComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule
  ]
})
export class PresupuestoModule { }
