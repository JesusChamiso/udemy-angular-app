import { Component, ElementRef, output, viewChild } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  readonly descripcionInput =
    viewChild.required<ElementRef>('descripcionInput');

  readonly precioInput = viewChild.required<ElementRef>('precioInput');

  protected nuevoProducto = output<Producto>();

  agregarProducto(evento: Event) {
    evento.preventDefault();
    const descripcionInput = this.descripcionInput().nativeElement;
    const precioInput = this.precioInput().nativeElement;
    if (
      descripcionInput.value.trim() === '' ||
      precioInput.value == null ||
      precioInput.value <= 0
    ) {
      alert('Por favor, ingrese una descripción y un precio válidos.');
    } else {
      this.nuevoProducto.emit(
        new Producto(descripcionInput.value.trim(), precioInput.value)
      );
      descripcionInput.value = '';
      precioInput.value = null;
    }
  }
}
