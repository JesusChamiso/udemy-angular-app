import { Component } from '@angular/core';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';
}
