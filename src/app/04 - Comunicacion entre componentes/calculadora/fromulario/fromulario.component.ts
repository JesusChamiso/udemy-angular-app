import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fromulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fromulario.component.html',
  styleUrl: './fromulario.component.css',
})
export class FromularioComponent {
  operandoA: number | null = null;
  operandoB: number | null = null;
  resultado = output<number>();

  sumar() {
    if (this.operandoA != null && this.operandoB != null) {
      this.resultado.emit(this.operandoA + this.operandoB);
    } else {
      alert('Deben introducirse valores correctos.');
    }
  }
}
