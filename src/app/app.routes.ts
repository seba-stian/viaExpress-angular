import { Routes } from '@angular/router';
import { LoginComponent } from './features/acceso/login/login.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { ListaPresupuestosViewComponent } from './features/presupuesto/lista-presupuestos-view/lista-presupuestos-view.component';

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
    {
      path: 'Presupuesto',
      loadChildren: () =>
        import('./features/presupuesto/presupuesto-routing.module').then(m => m.PresupuestoRoutingModule)
    }
];