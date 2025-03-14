import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ListadoProductosComponent,
  Producto,
  ProductoService,
} from '@app/components/Reto 5 Servicios TiendaOnline';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main2',
  imports: [ListadoProductosComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  productos: { [llave: string]: Producto } = {};

  productosSubscripcion: Subscription | null = null;

  private productoService = inject(ProductoService);
  private router = inject(Router);

  agregarProducto() {
    this.router.navigate(['tienda-online/agregar']);
  }

  ngOnInit() {
    this.cargarProductos();
    // escuchar cambios en la Lista de Productos
    this.productosSubscripcion =
      this.productoService.productosActualizados.subscribe(
        (productos: { [llave: string]: Producto }) => {
          this.productos = productos;
          // this.productoService.setProductos(productos);
        }
      );
  }

  cargarProductos() {
    this.productoService
      .listarProductos()
      .subscribe((productos: { [llave: string]: Producto }) => {
        this.productos = productos;
        this.productoService.setProductos(productos);
      });
  }

  ngOnDestroy() {
    if (this.productosSubscripcion != null) {
      this.productosSubscripcion.unsubscribe();
    }
  }
}
