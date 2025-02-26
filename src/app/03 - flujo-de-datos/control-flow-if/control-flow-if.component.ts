import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  imports: [],
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.css',
})
export class ControlFlowIfComponent {
  isAuthenticated: boolean = false;

  alternarAutenticacion() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
