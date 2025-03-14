import { Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;
  productoService = inject(ProductoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    // Verificar si se debe cargar un producto existente
    const llave = this.route.snapshot.paramMap.get('llave');
    if (llave) {
      const producto = this.productoService.getProductoByLlave(llave);
      if (producto) {
        // si encontramos un producto lo cargamos en el formulario
        this.llaveProducto = llave;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }
  guardarProducto(evento: Event) {
    evento.preventDefault();
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      alert('Por favor, ingrese una descripción y un precio válidos.');
    } else {
      this.productoService.guardarProducto(
        new Producto(this.descripcionInput.trim(), this.precioInput),
        this.llaveProducto
      );
      this.limpiar();
    }
    this.router.navigate(['tienda-online/listado']);
  }

  eliminarProducto() {
    if (this.llaveProducto !== null) {
      this.productoService.eliminarProducto(this.llaveProducto);
      this.llaveProducto = null;
      this.descripcionInput = '';
      this.precioInput = null;
      this.router.navigate(['tienda-online/listado']);
    }
  }

  cancelar() {
    this.router.navigate(['tienda-online/listado']);
  }

  limpiar() {
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
