import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
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
