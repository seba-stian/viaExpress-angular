import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-producto-carrusel',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './producto-carrusel.component.html',
  styleUrl: './producto-carrusel.component.css'
})
export class ProductoCarruselComponent {
  
  @Input() title!: string;
  @Input() price!: number;
  // @Input() reviews!: number;
  // @Input() rating!: number;
  @Input() image!: string;
  // @Input() colors!: string[];
  qty: number = 5;
  selectedColor: string = '';
  Math = Math;

  products: Product[] = [
    {
      title: 'PlayStation®5 Console – 1TB',
      price: 499,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
    },
    {
      title: 'Apple Watch SE [GPS 40mm]',
      price: 699,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
    },
    {
      title: 'PlayStation®5 Console – 1TB',
      price: 499,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
    },
    {
      title: 'Apple Watch SE [GPS 40mm]',
      price: 699,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
    },
    {
      title: 'PlayStation®5 Console – 1TB',
      price: 499,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg'
    },
    {
      title: 'Apple Watch SE [GPS 40mm]',
      price: 699,
      image: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg'
    }
    // Puedes añadir más productos aquí
  ];

  ngOnInit() {
  }
}
