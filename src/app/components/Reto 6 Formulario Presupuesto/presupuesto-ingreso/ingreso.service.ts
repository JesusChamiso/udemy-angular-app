import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 5000),
  ];

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
  agregarIngreso(descripcion: string, valor: number) {
    this.ingresos.push(new Ingreso(descripcion, valor));
  }
}
