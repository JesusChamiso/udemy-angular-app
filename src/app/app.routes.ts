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

export const routes: Routes = [
  {
    path: '',
    component: ListadoUsuariosComponent,
  },
  {
    path: 'mostrar-mensaje',
    component: EventBindingComponent,
  },
  {
    path: 'configuracion',
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
        path: 'editar/:id',
        component: FormularioComponent,
      },
    ],
  },
  // Ruta comodin para ruta no registrada
  {
    path: '**',
    component: ErrorComponent,
  },
];
