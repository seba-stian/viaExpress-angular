import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NacionalidadService } from '../../../core/services/nacionalidad.service';
import { Comuna } from '../../../core/models/direccionModel/comuna.model';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/models/usuarioModel/usuario.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { Region } from '../../../core/models/direccionModel/region.model';
import { PresupuestoFormService } from '../../../core/services/formPresupuesto.service';
import { Subscription } from 'rxjs';
import { RutFormatDirective } from '../../../shared/directives/rut-format.directive';
import { rutValidator } from '../../../shared/functions/rut.validator';

@Component({
  selector: 'app-datos-personas',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          ReactiveFormsModule,
          NgSelectModule,
          RutFormatDirective
        ],
  templateUrl: './datos-personas.component.html',
  styleUrl: './datos-personas.component.css'
})
export class DatosPersonasComponent implements OnInit, OnDestroy {

  comunaSelect:Comuna[] = [];
  usuarioRecepcionistaSelect:Usuario[] = [];
  formUsuarioCliente!: FormGroup;
  formRecepcionista!: FormGroup;
  formNombreProyect!: FormGroup;
  regionSelect?: Region;
  private subs = new Subscription();
  nombreProyect: string = '';

  //Inputs
  usuarioRecepcionista:Usuario= {
    Rut: null,
    Apellido: '',
    Email: '',
    Nombre: '',
    IdVeUsuario: 0,
    Celular: 0,
    IdVeComuna: 0,
    IdVeRegion: 0,
    IdVeTipoUsuario: 0
  };

  constructor(private nacionalidadService: NacionalidadService, private usuarioService: UsuarioService, 
    private fb: FormBuilder, private formService: PresupuestoFormService) {
      
  }

  ngOnInit(): void {
    this.ObtenerComunas();
    this.ObtenerUsuarios();
    
    this.formService.ejecutarFormCliente$.subscribe(() => this.ejecutarFormCliente());
    this.formService.ejecutarFormRecepcionista$.subscribe(() => this.ejecutarFormRecepcionista());

    this.formRecepcionista = this.fb.group({
      IdVeUsuario: [{value: '', disabled: true}, [Validators.required]],
      Nombre: ['', {disabled: true }],
      Apellido: ['', {disabled: true }],
      Email: ['', {disabled: true }]
    });

    this.formUsuarioCliente = this.fb.group({
      Rut: ['', [Validators.required, Validators.maxLength(12), rutValidator]],
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Direccion: [''],
      IdVeComuna: ['', [Validators.required, Validators.min(0)]],
      IdVeRegion: [{value: '', disabled: true}, [Validators.required]],
    });

    this.formNombreProyect = this.fb.group({
      nombreProyecto: ['', [Validators.required, Validators.minLength(5)]]
    });

    // Al cambiar el select, actualiza los demás campos
    this.formRecepcionista.get('IdVeUsuario')?.valueChanges.subscribe(id => {
      const seleccionado = this.usuarioRecepcionistaSelect.find(u => u.IdVeUsuario == id);
      if (seleccionado) {
        this.formRecepcionista.patchValue({
          Nombre: seleccionado.Nombre,
          Apellido: seleccionado.Apellido,
          Email: seleccionado.Email
        });
      } else {
        this.formRecepcionista.patchValue({
          Nombre: '',
          Apellido: '',
          Email: ''
        });
      }
    });

    this.subs.add(
      this.formService.ejecutarFormCliente$.subscribe(() => {
        const valido = this.formUsuarioCliente.valid;
        if (!valido) {
          this.formUsuarioCliente.markAllAsTouched();
        }
        this.formService.informarResultadoClienteFormulario(valido);
      })
    );
    this.subs.add(
      this.formService.ejecutarFormRecepcionista$.subscribe(() => {
        const valido = this.formRecepcionista.valid;
        console.log('Validando formulario recepcionista', this.formRecepcionista.value);
        if (!valido) {
          this.formRecepcionista.markAllAsTouched();
        }
        this.formService.informarResultadoRecepcionistaFormulario(valido);
      })
    );

    // Habilita el campo IdVeUsuario si el nombre del proyecto tiene más de 5 caracteres
    this.formNombreProyect.get('nombreProyecto')?.valueChanges.subscribe(valor => {
      if (valor && valor.length > 5) {
        this.formRecepcionista.get('IdVeUsuario')?.enable({ emitEvent: false });
      } else {
        this.formRecepcionista.patchValue({
            IdVeUsuario: '',  
            Nombre: '',
            Apellido: '',
            Email: ''
          });
        this.formRecepcionista.get('IdVeUsuario')?.disable({ emitEvent: false });
      }
    });

    const data = this.formService.getPresupuesto();
    console.log('Datos del presupuesto al cargar persona el componente:', data);
    //recupero la info almacenada y la muestro al cargar el componente
    if (data.usuarioCliente) {
      const usuarioCL = data.usuarioCliente; // O el que necesites
      const usuarioRecepcionista = data.usuarioRecepcionista;
      const nombreProyecto = data.nombrePresupuesto;

      if(usuarioRecepcionista)
      {
        this.formRecepcionista.get('IdVeUsuario')?.enable({ emitEvent: false });
        this.formRecepcionista.patchValue({
          IdVeUsuario: usuarioRecepcionista?.IdVeUsuario || '',
          Nombre: usuarioRecepcionista?.Nombre,
          Apellido: usuarioRecepcionista?.Apellido,
          Email: usuarioRecepcionista?.Email
        });
      }

      this.formUsuarioCliente.patchValue({
        Rut: usuarioCL.Rut || '',
        Nombre: usuarioCL.Nombre || '',
        Apellido: usuarioCL.Apellido || '',
        Email: usuarioCL.Email || '',
        Direccion: usuarioCL.Direccion || '',
        IdVeComuna: usuarioCL.IdVeComuna || '',
        IdVeRegion: usuarioCL.IdVeRegion || '',
        idveusuario: usuarioCL.IdVeUsuario || '',       
      });

      console.log('Formulario de vehículo cargado con datos:', this.formUsuarioCliente.value);
    } else {
      console.warn('No hay datos de usaurio en el formulario de presupuesto');
    }
  }

  // Ejecuta la validación del formulario del cliente y muestra los resultados
  ejecutarFormCliente() {
    // Object.keys(this.formUsuarioCliente.controls).forEach(key => {
    // const control = this.formUsuarioCliente.get(key);
    //   console.log(`${key}: valid=${control?.valid}, value=${control?.value}`);
    // });
    if (this.formUsuarioCliente.valid &&  this.formRecepcionista.valid) {
      console.log('Cliente válido:', this.formUsuarioCliente.value);
      //emitir formulario al padre
      this.formService.updatePresupuesto({
        usuarioCliente: this.formUsuarioCliente.value,
        nombrePresupuesto: this.nombreProyect
      })
    } else {
      this.formUsuarioCliente.markAllAsTouched();
      this.formNombreProyect.markAllAsTouched();
      console.warn('Formulario uno cliente inválido');
    }
  }
  // Ejecuta la validación del formulario del recepcionista y muestra los resultados
  ejecutarFormRecepcionista() {
    if (this.formUsuarioCliente.valid && this.formRecepcionista.valid) {
      console.log('Recepcionista válido:', this.formRecepcionista.value);
      this.formService.updatePresupuesto({
        usuarioRecepcionista: this.formRecepcionista.value,
      })
    } else {
      this.formRecepcionista.markAllAsTouched();
      console.warn('Formulario recepcionista inválido');
    }
}

  async onComunaChange(event: Event) {
    const selectedId = Number((event.target as HTMLSelectElement).value);
    const selectedComuna = this.comunaSelect.find(c => c.IdVeComuna === selectedId);

    if (selectedComuna) {
      this.regionSelect = await this.nacionalidadService.obtenerRegion(selectedComuna.IdVeRegion);
      this.formUsuarioCliente.get('IdVeRegion')?.setValue(this.regionSelect?.IdVeRegion);

    } else {
      this.regionSelect = undefined;
      this.formUsuarioCliente.get('region')?.setValue('');
    }
  }

  async ObtenerComunas(){
    const comunasApi = await this.nacionalidadService.obtenerComunas() as Comuna[];
    this.comunaSelect = comunasApi;
  }
  
  async ObtenerUsuarios()
  {
    const usuariosApi = await this.usuarioService.obtenerUsuarios() as Usuario[];
    this.usuarioRecepcionistaSelect = usuariosApi;
  }

    ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  // setUsuario(event: Event)
  // {
  //   const selectElement = event.target as HTMLSelectElement;
  //   const usuarioSelect = selectElement.value as unknown as number;
    
  //   if (!usuarioSelect)
  //     this.usuarioRecepcionista = new Usuario();      
  //   else
  //     this.usuarioRecepcionista = this.usuarioRecepcionistaSelect.filter(usuarioFiltro => usuarioFiltro.IdVeUsuario == usuarioSelect)[0];
  // }
    // async setRegion(event: Event)
  // {
  //   const selectElement = event.target as HTMLSelectElement;
  //   const regionComuna = selectElement.value;

  //   //[(ngModel)]="regionSelectId" se utiliza para enlazar el cambio de la comuna a la region
  //   //de forma que el ngModel obligue al select del region a detectar el cambio y asi funcionar
  //   if (!regionComuna) {
  //     this.regionSelect = null;// elimina cualquier region seleccionada por defecto
  //     this.regionSelectId = '';//setea valor en vacio para seleccionar texto Seleccione Region
  //     return;
  //   }

  //   const idRegion = parseInt(regionComuna.split('-')[0]);
  //   this.regionSelect = await this.nacionalidadService.obtenerRegion(idRegion);
  //   this.regionSelectId = this.regionSelect?.IdVeRegion;
  // }
}
