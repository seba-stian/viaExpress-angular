import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-presupuestos-view',
  standalone: false,
  templateUrl: './lista-presupuestos-view.component.html',
  styleUrl: './lista-presupuestos-view.component.css'
})
export class ListaPresupuestosViewComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void { 
  }


  nuevoPresupuesto()
  {
    this.router.navigate(['Presupuesto/Persona']);
  }

}
