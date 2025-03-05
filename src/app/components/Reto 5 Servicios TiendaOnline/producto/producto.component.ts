import { ProductoService } from '../producto.service';
import { Producto } from './../../Reto 3 Flujo de Datos/producto.model';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  producto = input.required<Producto>();

  private productoService = inject(ProductoService);
  emitirDetalleProducto() {
    this.productoService.detalleProductoEmmiter.emit(this.producto());
  }
}
