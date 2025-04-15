import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../shared/layout/dashboard/dashboard.component';
import { CrudPresupuestosViewComponent } from './crud-presupuestos-view/crud-presupuestos-view.component';
import { DatosPersonasComponent } from './datos-personas/datos-personas.component';
import { DatosVehiculosComponent } from './datos-vehiculos/datos-vehiculos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        {
          path: '',
          component: CrudPresupuestosViewComponent,
          children: [
            { path: '', redirectTo: 'Persona', pathMatch: 'full' },
            { path: 'Persona', component: DatosPersonasComponent },
            { path: 'Vehiculo', component: DatosVehiculosComponent },
            { path: 'Producto', component: ListaProductosComponent }
          ]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
