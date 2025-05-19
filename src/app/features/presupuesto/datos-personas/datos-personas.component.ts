import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NacionalidadService } from '../../../core/services/nacionalidad.service';
import { Comuna } from '../../../core/models/direccionModel/comuna.model';
import { debounceTime, distinctUntilChanged, switchMap, of, Subject } from 'rxjs';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/models/usuarioModel/usuario.model';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-datos-personas',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          ReactiveFormsModule,
          NgSelectModule
        ],
  templateUrl: './datos-personas.component.html',
  styleUrl: './datos-personas.component.css'
})
export class DatosPersonasComponent implements OnInit{

  comunaSelect:Comuna[] = [];
  usuarioRecepcionistaSelect:Usuario[] = [];
  regionSelect: any = null;
  regionSelectId: string = '';
  // usuarioCliente:Usuario;
  // usuarioSeleccionado: any = null;
  // search$ = new Subject<string>();
  // usuarios: any[] = [];
  // cargando = false;

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

  constructor(private nacionalidadService: NacionalidadService, private usuarioService: UsuarioService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.ObtenerComunas();
    this.ObtenerUsuarios();
    // this.inicializarBusqueda();
  }

  async setRegion(event: Event)
  {
    const selectElement = event.target as HTMLSelectElement;
    const regionComuna = selectElement.value;

    //[(ngModel)]="regionSelectId" se utiliza para enlazar el cambio de la comuna a la region
    //de forma que el ngModel obligue al select del region a detectar el cambio y asi funcionar
    if (!regionComuna) {
      this.regionSelect = null;// elimina cualquier region seleccionada por defecto
      this.regionSelectId = '';//setea valor en vacio para seleccionar texto Seleccione Region
      return;
    }

    const idRegion = parseInt(regionComuna.split('-')[0]);
    this.regionSelect = await this.nacionalidadService.obtenerRegion(idRegion);
    this.regionSelectId = this.regionSelect?.IdVeRegion;
  }

  async ObtenerComunas(){
    
    const comunasApi = await this.nacionalidadService.obtenerComunas() as Comuna[];
    console.log(comunasApi);
    this.comunaSelect = comunasApi;
  }
  
  async ObtenerUsuarios()
  {
    const usuariosApi = await this.usuarioService.obtenerUsuarios() as Usuario[];

    this.usuarioRecepcionistaSelect = usuariosApi;
    console.log(this.usuarioRecepcionistaSelect)
  }

  setUsuario(event: Event)
  {
    const selectElement = event.target as HTMLSelectElement;
    const usuarioSelect = selectElement.value as unknown as number;
    
    if (!usuarioSelect)
      this.usuarioRecepcionista = new Usuario();      
    else
      this.usuarioRecepcionista = this.usuarioRecepcionistaSelect.filter(usuarioFiltro => usuarioFiltro.IdVeUsuario == usuarioSelect)[0];
  }
  

  // inicializarBusqueda() {
  //   this.search$
  //     .pipe(
  //       debounceTime(400),
  //       distinctUntilChanged(),
  //       switchMap(async valor => {
  //         console.log("rut a buscar "+valor);
  //         if(valor !== null && valor !== undefined && valor !== '')
  //         {
  //           if (valor!.length >= 3) {
  //             this.cargando = true;
  //             const usuariosApi = await this.usuarioService.obtenerUsuarioRut(valor);
  //             return usuariosApi;
  //           }
  //         }
  //         return [];
  //       })
  //     )
  //     .subscribe((usuariosApi: any) => {        
  //       this.usuarios = usuariosApi;
  //       this.cargando = false;
  //     });
  // }

  // onSearch(termino: any) {
  //   if (termino && termino.length >= 3) {
  //     this.search$.next(termino);
  //   }
  // }

  // onBlur() {
  //   const inputElement = document.querySelector('ng-select input') as HTMLInputElement | null;
  //   if (!inputElement) {
  //     if(!inputElement!.value.trim())
  //     {
  //       this.usuarioSeleccionado = null;
  //       this.usuarios = [];
  //     }
  //   }
  // }
  

  // seleccionarUsuario(usuario: any) {
    
  //   if (usuario) {
  //     console.log('Usuario seleccionado:', usuario);
  //     this.usuarioRecepcionista = usuario;
  //     this.cdr.detectChanges();
  //   }   
  // }
}
