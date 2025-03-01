import { Component, viewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  mensajePadre: string = 'Mensaje desde el componente padre';

  mensaje: string = '';
  // Se emitio un <string> que se recibe del componente hijo
  recibirNotificacion(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }

  readonly hijoComponent = viewChild.required<HijoComponent>('hijo');

  cambiarMensajeHijo() {
    const element = this.hijoComponent();
    element.CambiarMensaje('Mensaje cambiado desde el componente padre');
  }
}
