import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
          FormsModule,
          CommonModule,
          NavbarComponent,
          MenuComponent,
          HomeComponent,
          FooterComponent
        ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor(private router: Router) { }
  
  redirect() {
    this.router.navigate(['Home']);
  }

  ngOnInit(): void {
    initFlowbite();
    // this.redirect();
    // if (!this.session.isLoggedIn()) {
    //   return this.router.navigate(['/login']);
    // }

  }

}
