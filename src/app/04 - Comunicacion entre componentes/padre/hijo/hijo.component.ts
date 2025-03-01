import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  mensaje = input<string>();
  mensajeVC: string = 'mensaje desde el Componente Hijo';

  CambiarMensaje(nuevoMensaje: string) {
    this.mensajeVC = nuevoMensaje;
  }

  notificarPadre = output<string>();

  EnviarMensaje() {
    // Emitir el evento con un mensaje<string>
    this.notificarPadre.emit('Mensaje desde el componente hijo');
  }
}
