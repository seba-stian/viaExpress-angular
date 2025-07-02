import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule
        ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  @Input() cantidadRegistros: number = 0;
  ngOnInit(): void {

  }
}
