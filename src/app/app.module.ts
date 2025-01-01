import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/layouts/login/login.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PresupuestosComponent } from './components/layouts/presupuestos/presupuestos.component';
import { NavbarComponent } from './containers/dashboard/navbar/navbar.component';
import { FooterComponent } from './containers/dashboard/footer/footer.component';
import { MenuComponent } from './containers/dashboard/menu/menu.component';
import { ListaPresupuestosViewComponent } from './components/layouts/presupuestos/lista-presupuestos-view/lista-presupuestos-view.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CrudPresupuestosViewComponent } from './components/layouts/presupuestos/crud-presupuestos-view/crud-presupuestos-view.component';
import { HomeComponent } from './containers/dashboard/home/home.component';
import { DatosVehiculosComponent } from './components/layouts/presupuestos/datos-vehiculos/datos-vehiculos.component';
import { DatosPersonasComponent } from './components/layouts/presupuestos/datos-personas/datos-personas.component';
import { ListaProductosComponent } from './components/layouts/presupuestos/lista-productos/lista-productos.component';
import { ModalProductosComponent } from './containers/modals/modal-productos/modal-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestosComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ListaPresupuestosViewComponent,
    DashboardComponent,
    CrudPresupuestosViewComponent,
    HomeComponent,
    DatosVehiculosComponent,
    DatosPersonasComponent,
    ListaProductosComponent,
    ModalProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
