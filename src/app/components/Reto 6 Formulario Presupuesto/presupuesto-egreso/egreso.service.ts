import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  egresos: Egreso[] = [new Egreso('Renta depto', 900), new Egreso('Ropa', 200)];
  constructor() {}

  eliminar(egreso: Egreso) {
    const indice = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

  agregarEgreso(descripcion: string, valor: number) {
    this.egresos.push(new Egreso(descripcion, valor));
  }
}
