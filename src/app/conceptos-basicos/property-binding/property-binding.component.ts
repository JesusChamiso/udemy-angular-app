import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  texto: string = '';
  actualizarTexto($event: Event) {
    const elementoInput = event?.target as HTMLInputElement;
    this.texto = elementoInput.value;
  }
}
