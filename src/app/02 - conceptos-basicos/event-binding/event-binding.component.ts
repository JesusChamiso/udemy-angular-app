import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  protected mensaje: string = '';

  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.mensaje = this.route.snapshot.queryParams['mensaje'];
  }

  mostrarMensaje() {
    this.mensaje = 'Hola has hecho click en el Boton';
  }

  resetearMensaje() {
    this.mensaje = '';
  }
}
