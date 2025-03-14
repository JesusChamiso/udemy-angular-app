import { Router } from '@angular/router';
import { Component, inject, input } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  producto = input.required<Producto>();
  llave = input<string>();

  private router = inject(Router);

  editarProducto(llave: string) {
    this.router.navigate(['tienda-online/editar', this.llave()]);
  }
}
