import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  readonly referenciaInput = viewChild.required<ElementRef>('referenciaInput');
  cambiarTexto() {
    const element = this.referenciaInput();
    element.nativeElement.value = 'Texto Cambiado';
    element.nativeElement.focus();
  }
}
