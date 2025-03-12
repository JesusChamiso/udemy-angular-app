import { RouterOutlet } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css',
})
export class ListadoUsuariosComponent {
  usuarios: any[] = [];
  usuariosServices = inject(UsuariosService);
  ngOnInit() {
    this.usuariosServices.obtenerDatos().subscribe((data) => {
      // console.log(data);
      this.usuarios = data;
    });
  }
}
