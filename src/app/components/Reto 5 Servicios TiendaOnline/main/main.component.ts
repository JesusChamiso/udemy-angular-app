import { Component, inject } from '@angular/core';
import {
  FormularioComponent,
  ListadoProductosComponent,
  Producto,
  ProductoService,
} from '@app/components/Reto 5 Servicios TiendaOnline';

@Component({
  selector: 'app-main2',
  imports: [ListadoProductosComponent, FormularioComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  productos: Producto[] = [];

  private productoService = inject(ProductoService);
  constructor() {
    this.productoService.detalleProductoEmmiter.subscribe(
      (producto: Producto) =>
        alert(`Producto: ${producto.descripcion}, Precio: $${producto.precio}`)
    );
  }

  ngOnInit() {
    this.productos = this.productoService.productos;
  }
}
