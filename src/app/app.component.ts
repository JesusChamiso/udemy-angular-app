import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './components/Reto 1 Componentes';
import { EventBindingComponent } from './conceptos-basicos/event-binding/event-binding.component';
import { PropertyBindingComponent } from './conceptos-basicos/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './conceptos-basicos/two-way-binding/two-way-binding.component';
import { CalculadoraComponent } from './components/Reto 2 Conceptos Basicos Calculadora/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ListadoProductosComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    CalculadoraComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';
}
