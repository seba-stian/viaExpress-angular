import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-presupuestos-view',
  standalone: true,
  imports: [
        RouterOutlet,
        FormsModule,
        CommonModule
      ],
  templateUrl: './crud-presupuestos-view.component.html',
  styleUrl: './crud-presupuestos-view.component.css'
})
export class CrudPresupuestosViewComponent implements OnInit{

  mostrarBoton:boolean = true;
  mostrarBotonSiguiente:boolean = true;
  mostrarBotonFinal:boolean = false;
  selectStepperPersona:boolean = false;
  selectStepperVehiculo:boolean = false;
  selectStepperProductos:boolean = false;
  selectStepperFinal:boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    initFlowbite();

    if(this.router.url == '/Presupuesto/Persona')
    {
      this.mostrarBoton = false;
      this.resetStepper();
      this.selectStepperPersona = true;
      console.log('stepper persona');
    }
    if(this.router.url == '/Presupuesto/Productos')
      {
        this.mostrarBoton = true;
        this.mostrarBotonSiguiente = false;
        this.mostrarBotonFinal = true;
        this.resetStepper();
        this.selectStepperProductos = true;
        console.log('stepper Productos');
      }
  }

  private resetStepper()
  {
    this.selectStepperPersona = false;
    this.selectStepperVehiculo = false;
    this.selectStepperProductos = false;
    this.selectStepperFinal = false;
  }

  volver()
  {
    if(this.router.url == '/Presupuesto/Vehiculo')
      {
        this.mostrarBoton = false;
        this.resetStepper();
        this.selectStepperPersona = true;
        this.router.navigate(['Presupuesto/Persona']);
      }
    if(this.router.url == '/Presupuesto/Productos')
      {
        this.mostrarBotonSiguiente = true;
        this.mostrarBotonFinal = false;
        this.mostrarBoton = true;
        this.resetStepper();
        this.selectStepperVehiculo = true;
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
        this.resetStepper();
        this.selectStepperVehiculo = true;
        this.router.navigate(['Presupuesto/Vehiculo']);
      }
    if(this.router.url == '/Presupuesto/Vehiculo')
      {
        this.mostrarBoton = true;
        this.mostrarBotonSiguiente = false;
        this.mostrarBotonFinal = true;
        this.resetStepper();
        this.selectStepperProductos = true;
        this.router.navigate(['Presupuesto/Productos']);
      }
  }  
}
