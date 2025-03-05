import { MainComponent } from './components/Reto 4 Comunicacion entre Componentes/main/main.component';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from '@app/components';
import {
  EventBindingComponent,
  PropertyBindingComponent,
  TwoWayBindingComponent,
} from '@app/02 - conceptos-basicos';

import {
  ControlFlowForComponent,
  ControlFlowIfComponent,
  LocalReferenceComponent,
} from './03 - flujo-de-datos';
import { ListadoProductosComponent } from './components/Reto 3 Flujo de Datos';
import { CalculadoraMainComponent } from './04 - Comunicacion entre componentes/calculadora';
import {
  ViewChildComponent,
  PadreComponent,
} from './04 - Comunicacion entre componentes';
import { MainComponent as MainComponent1 } from './components/Reto 4 Comunicacion entre Componentes';
import { ListadoUsuariosComponent, MensajeService } from './05 - Servicios';
import { MainComponent as MainComponent2 } from './components/Reto 5 Servicios TiendaOnline';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ListadoProductosComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    CalculadoraComponent,
    ControlFlowIfComponent,
    LocalReferenceComponent,
    ControlFlowForComponent,
    PadreComponent,
    CalculadoraMainComponent,
    ViewChildComponent,
    MainComponent1,
    ListadoUsuariosComponent,
    MainComponent2,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';

  mensaje: string;

  mensajeService = inject(MensajeService);
  constructor() {
    this.mensaje = this.mensajeService.obtenerMensaje();
  }
}
