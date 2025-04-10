import { Routes } from '@angular/router';
import { LoginComponent } from './components/layouts/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ListaPresupuestosViewComponent } from './components/layouts/presupuestos/lista-presupuestos-view/lista-presupuestos-view.component';
import { CrudPresupuestosViewComponent } from './components/layouts/presupuestos/crud-presupuestos-view/crud-presupuestos-view.component';
import { DatosPersonasComponent } from './components/layouts/presupuestos/datos-personas/datos-personas.component';
import { DatosVehiculosComponent } from './components/layouts/presupuestos/datos-vehiculos/datos-vehiculos.component';
import { ListaProductosComponent } from './components/layouts/presupuestos/lista-productos/lista-productos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full', },
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent},
    { path: '', component: DashboardComponent,
      children: [
        { 
          path: 'Home', 
          component: ListaPresupuestosViewComponent
        }
      ]
    },
    { path: '', component: DashboardComponent,
      children: [
        { 
          path: 'Presupuesto', 
          component: CrudPresupuestosViewComponent,
          children:[
            { 
              path: 'Persona', 
              component: DatosPersonasComponent
            },
            { 
              path: 'Vehiculo', 
              component: DatosVehiculosComponent
            },
            { 
              path: 'Productos', 
              component: ListaProductosComponent
            },
          ]
        }
      ],
    },
];