import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '@app/components/auth';

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent {
  loginService = inject(LoginService);

  menuVisual(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  salir() {
    this.loginService.logout();
  }
}
