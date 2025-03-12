import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import {
  Egreso,
  EgresoService,
} from '@app/components/Reto 6 Formulario Presupuesto';
@Component({
  selector: 'app-presupuesto-egreso',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './presupuesto-egreso.component.html',
  styleUrl: './presupuesto-egreso.component.css',
})
export class PresupuestoEgresoComponent {
  egresos: Egreso[] = [];
  ingresoTotal = input<number>();
  private egresoService = inject(EgresoService);
  constructor() {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal()!;
  }
}
