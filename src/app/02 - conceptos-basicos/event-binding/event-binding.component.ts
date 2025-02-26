import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  protected mensaje: string = '';
  resetearMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje = 'Hola has hecho click en el Boton';
  }
}
