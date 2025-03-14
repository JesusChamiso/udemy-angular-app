import { LoginService } from './login.service';
import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate {
  private loginService = inject(LoginService);
  private router = inject(Router);

  // verificar si el usuario esta autenticado antes de activar la ruta
  canActivate(): boolean {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  constructor() {}
}
