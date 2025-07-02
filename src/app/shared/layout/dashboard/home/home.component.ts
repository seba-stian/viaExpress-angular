import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RutaNav } from '../../../../core/models/RutaNav.model';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      FormsModule,
      CommonModule ,
      RouterOutlet,
      RouterModule,
      FooterComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  rutaLinkeable:boolean = false;
  cantidadRutas:number = 0;
  rutaObtenida:string[];

  constructor(private router: Router, private route: ActivatedRoute) {}

    rutasNavegacion: RutaNav[] = [];
    // rutaNavi: RutaNav;   
    // rutaPresupuesto: any;
    // rutaHijaRecibida: string;

    ngOnInit(): void {
      
      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getActivatedComponent(this.route);
        this.rutasNavegacion = [];
        this.setRutaNav();
      });

      
      this.setRutaNav();
    }

    private setRutaNav()
    {
      this.rutaObtenida = this.router.url.split('/');
      this.cantidadRutas = this.rutaObtenida.length;

      this.rutaObtenida.forEach((element, indice) => {
        if((indice+1) == this.cantidadRutas)
        {
          this.rutaLinkeable = true;
        }
        if(element != '' && element != 'Home')
        {
          this.rutasNavegacion.push(new RutaNav(element,this.router.url, this.rutaLinkeable));
        }
      });
      console.log('ruta obtenida: '+this.rutaObtenida);
    }

    private getActivatedComponent(route: ActivatedRoute): string | null {
      while (route.firstChild) {
        route = route.firstChild;
      }
      let result = route.component ? route.component.name : null;
      return result;
    }

    // onActivate(event: any): void {
    //   console.log('Componente activado:', event.constructor.name);
    // }
    // RecibirRuta(event: any)
    // {
    //   console.log('ruta Recibida: '+event);
    // }

    quitarNav()
    {

    }

}
