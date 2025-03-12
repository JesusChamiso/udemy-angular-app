import { Component, input } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-listado-productos-2',
  imports: [ProductoComponent],
  templateUrl: './listado-productos-2.component.html',
  styleUrl: './listado-productos-2.component.css',
})
export class ListadoProductosComponent {
  productos = input<Producto[]>();
}
