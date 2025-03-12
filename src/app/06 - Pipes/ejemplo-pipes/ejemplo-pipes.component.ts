import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css',
})
export class EjemploPipesComponent {
  empleados = [
    {
      nombre: 'Juan Perez',
      sueldo: 12000,
      fechaNacimiento: new Date('1990-01-01'),
    },
    {
      nombre: 'Pedro Pascal',
      sueldo: 15000,
      fechaNacimiento: new Date('1980-09-05'),
    },
    {
      nombre: 'Maria Olivera',
      sueldo: 10000,
      fechaNacimiento: new Date('1995-12-15'),
    },
  ];
}
