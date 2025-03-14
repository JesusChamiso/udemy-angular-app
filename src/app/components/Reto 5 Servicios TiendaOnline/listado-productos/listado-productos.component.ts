import { Component, input } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos = input<{ [llave: string]: Producto }>();

  obtenerLlaves(): string[] {
    const prodVal = this.productos();
    if (prodVal) {
      return Object.keys(prodVal);
    }
    return [];
  }
}
