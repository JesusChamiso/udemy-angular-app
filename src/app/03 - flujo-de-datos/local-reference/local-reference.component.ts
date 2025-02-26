import { Component } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  imports: [],
  templateUrl: './local-reference.component.html',
  styleUrl: './local-reference.component.css',
})
export class LocalReferenceComponent {
  protected tarea: string = '';
  agregarTarea(nuevaTarea: string) {
    this.tarea = nuevaTarea;
  }
}
