import { MainComponent } from './components/Reto 4 Comunicacion entre Componentes/main/main.component';
import { Component, inject, LOCALE_ID } from '@angular/core';
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
import { EjemploPipesComponent } from './06 - Pipes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PresupuestoMainComponent } from './components/Reto 6 Formulario Presupuesto/presupuesto-main/presupuesto-main.component';
import { NavegacionComponent } from './07 - Routing';

registerLocaleData(localeEs, 'es');

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
    EjemploPipesComponent,
    PresupuestoMainComponent,
    NavegacionComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
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
