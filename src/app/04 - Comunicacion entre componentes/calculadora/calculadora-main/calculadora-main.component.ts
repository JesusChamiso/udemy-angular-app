import { Component } from '@angular/core';
import { FromularioComponent } from '../fromulario/fromulario.component';
import { ResultadoComponent } from '../resultado/resultado.component';

@Component({
  selector: 'app-calculadora-main',
  imports: [FromularioComponent, ResultadoComponent],
  templateUrl: './calculadora-main.component.html',
  styleUrl: './calculadora-main.component.css',
})
export class CalculadoraMainComponent {
  resultado: number = 0;
  resultadoPadre: number = 0;

  procesarResultado(resultado: number) {
    this.resultado = resultado;
    this.resultadoPadre = resultado;
  }
}
