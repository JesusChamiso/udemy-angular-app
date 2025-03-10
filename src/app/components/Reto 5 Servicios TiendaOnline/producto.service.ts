import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];

  constructor() {}

  detalleProductoEmmiter = new EventEmitter<Producto>();

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
