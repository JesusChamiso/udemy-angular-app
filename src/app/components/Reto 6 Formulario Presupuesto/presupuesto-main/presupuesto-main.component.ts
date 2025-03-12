import { Component, inject } from '@angular/core';
import {
  Egreso,
  EgresoService,
  Ingreso,
  IngresoService,
  PresupuestoCabeceroComponent,
  PresupuestoEgresoComponent,
  PresupuestoFormComponent,
  PresupuestoIngresoComponent,
} from '@app/components/Reto 6 Formulario Presupuesto';

@Component({
  selector: 'app-presupuesto-main',
  imports: [
    PresupuestoCabeceroComponent,
    PresupuestoFormComponent,
    PresupuestoIngresoComponent,
    PresupuestoEgresoComponent,
  ],
  templateUrl: './presupuesto-main.component.html',
  styleUrl: './presupuesto-main.component.css',
})
export class PresupuestoMainComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  private ingresoService = inject(IngresoService);
  private egresoService = inject(EgresoService);
  constructor() {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
