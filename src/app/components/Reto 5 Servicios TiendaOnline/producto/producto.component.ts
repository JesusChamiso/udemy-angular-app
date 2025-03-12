import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
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

  private productoService = inject(ProductoService);

  private router = inject(Router);

  editarProducto(id: number) {
    this.router.navigate(['tienda-online/editar', id]);
  }
}
