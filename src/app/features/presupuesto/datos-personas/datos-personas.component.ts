import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-personas',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule
        ],
  templateUrl: './datos-personas.component.html',
  styleUrl: './datos-personas.component.css'
})
export class DatosPersonasComponent {

}
