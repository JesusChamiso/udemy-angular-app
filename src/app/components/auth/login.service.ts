import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string | null = null;

  private router = inject(Router);
  private firebase = inject(FirebaseService);
  constructor() {}

  login(email: string, password: string) {
    const auth = this.firebase.auth;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser
          ?.getIdToken()
          .then((token) => {
            this.token = token;
            this.router.navigate(['/']);
          })
          .catch((error) => {
            console.log('Error al obtener el token', error);
          });
      })
      .catch((error) => {
        console.log('Error al iniciar sesión', error);
      });
  }

  getIdtoken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token !== null;
  }

  // cerrar sesion
  logout() {
    const auth = this.firebase.auth;
    auth
      .signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error de logout', error);
      });
  }
}
