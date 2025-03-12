import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  EgresoService,
  IngresoService,
} from '@app/components/Reto 6 Formulario Presupuesto';

@Component({
  selector: 'app-presupuesto-form',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './presupuesto-form.component.html',
  styleUrl: './presupuesto-form.component.css',
})
export class PresupuestoFormComponent {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string | null = null;
  valorInput: number | null = null;
  private ingresoService = inject(IngresoService);
  private egresoService = inject(EgresoService);

  tipoOperacion(evento: Event) {
    const selectTipo = evento.target as HTMLSelectElement;
    this.tipo = selectTipo.value;
  }

  agregarValor() {
    if (this.descripcionInput !== null && this.valorInput !== null) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoService.agregarIngreso(
          this.descripcionInput,
          this.valorInput
        );
      } else if (this.tipo === 'egresoOperacion') {
        this.egresoService.agregarEgreso(
          this.descripcionInput,
          this.valorInput
        );
      }
    } else {
      alert('Por favor, ingrese una descripción y un valor válidos.');
    }
    this.limpiarFormulario();
  }
  limpiarFormulario() {
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
