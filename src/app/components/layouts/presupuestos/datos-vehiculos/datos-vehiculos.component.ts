import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-vehiculos',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule
        ],
  templateUrl: './datos-vehiculos.component.html',
  styleUrl: './datos-vehiculos.component.css'
})
export class DatosVehiculosComponent {

}
