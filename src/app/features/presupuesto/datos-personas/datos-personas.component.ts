import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NacionalidadService } from '../../../core/services/nacionalidad.service';
import { Comuna } from '../../../core/models/direccionModel/comuna.model';
import { debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Usuario } from '../../../core/models/usuarioModel/usuario.model';

@Component({
  selector: 'app-datos-personas',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          ReactiveFormsModule
        ],
  templateUrl: './datos-personas.component.html',
  styleUrl: './datos-personas.component.css'
})
export class DatosPersonasComponent implements OnInit{

  comunaSelect:Comuna[] = [];
  regionSelect: any = null;
  regionSelectId: string = '';

  busquedaControl = new FormControl('');
  resultados: any;
  resultadosRut: Usuario[] = [];

  constructor(private nacionalidadService: NacionalidadService, private usuarioService: UsuarioService) {
    this.busquedaControl.valueChanges.pipe(
      debounceTime(300),                 // espera 300ms sin escribir
      distinctUntilChanged(),            // evita búsquedas repetidas
      switchMap(valor => this.BuscarRut(valor)) // usa tu servicio real aquí
    ).subscribe(res => {
      this.resultados = res;
    });
  }

  ngOnInit(): void {
    this.ObtenerComunas();
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
    this.comunaSelect = await this.nacionalidadService.obtenerComunas();
  }

  async BuscarRut(valor: any)
  {
    if (!valor) return of([]);

    this.resultadosRut = await this.usuarioService.obtenerUsuarioRut(valor);
    // const filtro = this.usuarioCliente.filter(x => x.toLowerCase().includes(valor.toLowerCase()));

    console.log(this.resultadosRut);
    return of(this.resultadosRut);    
  }

}
