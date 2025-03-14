import { EventBindingComponent } from './02 - conceptos-basicos';
import { PadreComponent } from './04 - Comunicacion entre componentes';
import { HijoComponent } from './04 - Comunicacion entre componentes/padre/hijo/hijo.component';
import { ListadoUsuariosComponent } from './05 - Servicios/listado-usuarios/listado-usuarios.component';
import { Routes } from '@angular/router';
import {
  FormularioComponent,
  MainComponent,
} from './components/Reto 5 Servicios TiendaOnline';
import { ErrorComponent } from './components';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginGuardService } from './components/auth';

export const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardService],
    component: ListadoUsuariosComponent,
  },
  {
    path: 'mostrar-mensaje',
    canActivate: [LoginGuardService],
    component: EventBindingComponent,
  },
  {
    path: 'configuracion',
    canActivate: [LoginGuardService],
    children: [
      {
        path: 'padre',
        component: PadreComponent,
      },
      {
        path: 'hijo',
        component: HijoComponent,
      },
    ],
  },
  // Tienda OnLine
  {
    path: 'tienda-online',
    canActivate: [LoginGuardService],
    children: [
      {
        path: 'listado',
        component: MainComponent,
      },
      {
        path: 'agregar',
        component: FormularioComponent,
      },
      {
        path: 'editar/:llave',
        component: FormularioComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // Ruta comodin para ruta no registrada
  {
    path: '**',
    component: ErrorComponent,
  },
];
