import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ListadoProductosComponent,
  Producto,
  ProductoService,
} from '@app/components/Reto 5 Servicios TiendaOnline';

@Component({
  selector: 'app-main2',
  imports: [ListadoProductosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  productos: Producto[] = [];

  private productoService = inject(ProductoService);
  private router = inject(Router);

  agregarProducto() {
    this.router.navigate(['tienda-online/agregar']);
  }

  ngOnInit() {
    this.productos = this.productoService.productos;
  }
}
