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
import { CalculadoraMainComponent } from './04 - Comunicacion entre componentes/calculadora';
import {
  ViewChildComponent,
  PadreComponent,
} from './04 - Comunicacion entre componentes';
import { MainComponent } from './components/Reto 4 Comunicacion entre Componentes';

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
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';
}
