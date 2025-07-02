import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { DatosPersonasComponent } from '../datos-personas/datos-personas.component';
import { PresupuestoFormService } from '../../../core/services/formPresupuesto.service';
import { combineLatest } from 'rxjs';

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

  private esperandoValidacionCliente = false;
  private esperandoValidacionRecepcionista = false;
  private esperandoValidacionVehiculo = false;
  // @ViewChild(DatosPersonasComponent) hijo!: DatosPersonasComponent;
  mostrarBoton:boolean = true;
  mostrarBotonSiguiente:boolean = true;
  mostrarBotonFinal:boolean = false;
  selectStepperPersona:boolean = false;
  selectStepperVehiculo:boolean = false;
  selectStepperProductos:boolean = false;
  selectStepperFinal:boolean = false;

  constructor(private router: Router, private formService: PresupuestoFormService){}

  ngOnInit(): void {
    initFlowbite();

    // Suscribirse una sola vez
    combineLatest([
      this.formService.formClienteValido$,
      this.formService.formRecepcionistaValido$
    ]).subscribe(([esValido, esValidoR]) => {
      console.log('Validación del formulario cliente:', esValido);
      console.log('Validación del formulario recepcionista:', esValidoR);
    
      if (this.esperandoValidacionCliente && this.esperandoValidacionRecepcionista) {
        this.esperandoValidacionCliente = false;
        this.esperandoValidacionRecepcionista = false;
    
        if (!esValido || !esValidoR) {
          console.warn('Formulario padre cliente y recepcionista inválido');
          return;
        }
    
        // Continuar flujo si el formulario es válido
        this.mostrarBoton = true;
        this.resetStepper();
        this.selectStepperVehiculo = true;
        this.router.navigate(['Presupuesto/Vehiculo']);
      }
    });
    // this.formService.formClienteValido$.subscribe((esValido) => { 
    //   console.log('Validación del formulario cliente:', esValido);
    //   this.formService.formRecepcionistaValido$.subscribe((esValidoR) => {
    //     console.log('Validación del formulario recepcionista:', esValidoR);
    //     if (this.esperandoValidacionCliente && this.esperandoValidacionRecepcionista) {
    //     this.esperandoValidacionCliente = false;
    //     this.esperandoValidacionRecepcionista = false;

    //     if (!esValido && !esValidoR) {
    //       console.warn('Formulario padre cliente y recepcionista inválido');
    //       return;
    //     }

    //     //Continuar flujo si el formulario es válido
    //     this.mostrarBoton = true;
    //     this.resetStepper();
    //     this.selectStepperVehiculo = true;
    //     this.router.navigate(['Presupuesto/Vehiculo']);
    //   }

    //   });
    // });

    // Suscribirse una sola vez
    this.formService.formVehiculoValido$.subscribe((esValido) => {
      console.log('Validando formulario Vehiculo');
      if (this.esperandoValidacionVehiculo) {
        this.esperandoValidacionVehiculo = false;

        if (!esValido) {
          console.warn('Formulario padre cliente y recepcionista inválido');
          return;
        }
        console.log('formulario Vehiculo validado');
        // if(this.router.url == '/Presupuesto/Persona')
        // {
          this.mostrarBoton = true;
          this.resetStepper();
          this.selectStepperPersona = true;
          this.router.navigate(['Presupuesto/Productos']);
        // }
      }
    });
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

  //Ejecuta formularios de recepcionista y cliente del componente datos-personas
  // enviarAmbosFormularios() {
  //   if (this.hijo) {
  //     this.hijo.ejecutarFormRecepcionista();
  //     this.hijo.ejecutarFormCliente();
  //   } else {
  //     console.warn('El componente hijo no está disponible en el DOM');
  //   }
  // }

  // enviarAmbosFormularios() {
  //   this.formService.solicitarEjecutarFormCliente();
  //   this.formService.solicitarEjecutarFormRecepcionista();
  // }
  
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
    if(this.router.url == '/Presupuesto/Persona')
      {
        this.esperandoValidacionCliente = true;
        this.esperandoValidacionRecepcionista = true;
        this.formService.solicitarEjecutarFormCliente(); // Esto ejecuta la validación en el hijo
        this.formService.solicitarEjecutarFormRecepcionista(); // Esto ejecuta la validación en el hijo        
        return; // Detenemos el flujo aquí y esperamos el resultado de validación
      }
    if(this.router.url == '/Presupuesto/Vehiculo')
      {
        this.esperandoValidacionVehiculo = true;
        this.formService.solicitarEjecutarFormVehiculo(); // Esto ejecuta la validación en el hijo
        return; // Detenemos el flujo aquí y esperamos el resultado de validación
        // this.mostrarBoton = true;
        // this.mostrarBotonSiguiente = false;
        // this.mostrarBotonFinal = true;
        // this.resetStepper();
        // this.selectStepperProductos = true;
        // this.router.navigate(['Presupuesto/Productos']);
      }
  }  
}
