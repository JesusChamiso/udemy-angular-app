import { Component, inject } from '@angular/core';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;
  productoService = inject(ProductoService);

  agregarProducto(evento: Event) {
    evento.preventDefault();
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      alert('Por favor, ingrese una descripción y un precio válidos.');
    } else {
      this.productoService.agregarProducto(
        new Producto(this.descripcionInput.trim(), this.precioInput)
      );
      this.descripcionInput = '';
      this.precioInput = null;
    }
  }
}
