import { Component } from '@angular/core';
import {
  FormularioComponent,
  ListadoProductosComponent,
  Producto,
} from '@app/components/Reto 4 Comunicacion entre Componentes';

@Component({
  selector: 'app-main',
  imports: [ListadoProductosComponent, FormularioComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  protected productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];
  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
