import { Component } from '@angular/core';
import { ProductoComponent } from '@app/components/Reto 1 Componentes/producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {}
