import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-presupuesto-cabecero',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './presupuesto-cabecero.component.html',
  styleUrl: './presupuesto-cabecero.component.css',
})
export class PresupuestoCabeceroComponent {
  presupuestoTotal = input<number>();
  ingresoTotal = input<number>();
  egresoTotal = input<number>();
  porcentajeTotal = input<number>();
}
