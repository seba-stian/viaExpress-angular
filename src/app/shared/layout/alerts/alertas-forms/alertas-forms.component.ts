import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alertas-forms',
  standalone: true,
  imports: [
            FormsModule,
            CommonModule,
          ],
  templateUrl: './alertas-forms.component.html',
  styleUrl: './alertas-forms.component.css'
})
export class AlertasFormsComponent {
  @Input() tipo: 'error' | 'warning' | 'success' = 'error';
  @Input() titulo: string = 'Error';
  @Input() mensaje: string = 'Algo salió mal.';
  @Input() mostrar: boolean = false;
}
