import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-crud-presupuestos-view',
  standalone: false,
  templateUrl: './crud-presupuestos-view.component.html',
  styleUrl: './crud-presupuestos-view.component.css'
})
export class CrudPresupuestosViewComponent implements OnInit{

  mostrarBoton:boolean = true;
  mostrarBotonSiguiente:boolean = true;
  mostrarBotonFinal:boolean = false;
  selectStepper:boolean = true;

  constructor(private router: Router){}

  ngOnInit(): void {
    initFlowbite();

    if(this.router.url == '/Presupuesto/Persona')
    {
      this.mostrarBoton = false;
    }
    if(this.router.url == '/Presupuesto/Productos')
      {
        this.mostrarBoton = true;
        this.mostrarBotonSiguiente = false;
        this.mostrarBotonFinal = true;
      }
  }

  volver()
  {
    if(this.router.url == '/Presupuesto/Vehiculo')
      {
        this.mostrarBoton = false;
        this.router.navigate(['Presupuesto/Persona']);
      }
    if(this.router.url == '/Presupuesto/Productos')
      {
        this.mostrarBotonSiguiente = true;
        this.mostrarBotonFinal = false;
        this.mostrarBoton = true;
        this.router.navigate(['Presupuesto/Vehiculo']);
      }
  }
  cancelar()
  {
    this.router.navigate(['Home']);
  }
  continuar()
  {
    console.log(this.router.url)
    if(this.router.url == '/Presupuesto/Persona')
      {
        this.mostrarBoton = true;
        this.router.navigate(['Presupuesto/Vehiculo']);
      }
    if(this.router.url == '/Presupuesto/Vehiculo')
      {
        this.mostrarBoton = true;
        this.mostrarBotonSiguiente = false;
        this.mostrarBotonFinal = true;
        this.router.navigate(['Presupuesto/Productos']);
      }
  }  
}
