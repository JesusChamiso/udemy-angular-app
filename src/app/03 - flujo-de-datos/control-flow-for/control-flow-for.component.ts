import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-for',
  imports: [],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.css',
})
export class ControlFlowForComponent {
  protected tareas: string[] = [
    'Aprender Angular',
    'Aprender Typescript',
    'Desarrollar una App',
    'Aprender NodeJS',
  ];

  agregarTarea(nuevaTarea: string) {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}
