import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Ingreso,
  IngresoService,
} from '@app/components/Reto 6 Formulario Presupuesto';
@Component({
  selector: 'app-presupuesto-ingreso',
  imports: [CurrencyPipe],
  templateUrl: './presupuesto-ingreso.component.html',
  styleUrl: './presupuesto-ingreso.component.css',
})
export class PresupuestoIngresoComponent {
  ingresos: Ingreso[] = [];
  private ingresoService = inject(IngresoService);
  constructor() {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
