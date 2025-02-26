import { Component } from '@angular/core';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  protected productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];
  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      alert('Por favor, ingrese una descripción y un precio válidos.');
    } else {
      this.productos.push(
        new Producto(this.descripcionInput.trim(), this.precioInput)
      );
      this.descripcionInput = '';
      this.precioInput = null;
    }
  }
}
