import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  // Variable para el id siguiente y unico
  private idSiguiente = 1;
  productos: Producto[] = [];

  constructor() {
    this.inicializarProductos();
  }
  // agregar o modificar un producto
  guardarProducto(producto: Producto) {
    if (producto.id === null) {
      // producto nuevo
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else {
      // producto existente
      const index = this.productos.findIndex((p) => p.id === producto.id);
      if (index !== -1) {
        this.productos[index] = producto;
      }
    }
  }

  private inicializarProductos() {
    // Inicializamos los productos
    this.productos = [
      new Producto(this.idSiguiente++, 'Pantalon', 130.0),
      new Producto(this.idSiguiente++, 'Camisa', 80.0),
      new Producto(this.idSiguiente++, 'Playera', 50.0),
      new Producto(this.idSiguiente++, 'Buzo', 100.0),
      new Producto(this.idSiguiente++, 'Chaqueta', 150.0),
      new Producto(this.idSiguiente++, 'Vestido', 200.0),
      new Producto(this.idSiguiente++, 'Pantaloneta', 150.0),
    ];
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }

  eliminarProducto(id: number) {
    const index = this.productos.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }
}
