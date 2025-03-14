import { LoginService } from './../auth/login.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  private url =
    'https://tienda-online-angular-ddf85-default-rtdb.firebaseio.com/';

  http = inject(HttpClient);
  loginService = inject(LoginService);

  protected token = this.loginService.getIdtoken();

  listarProductos(): Observable<{ [llave: string]: Producto }> {
    const url_listar = `${this.url}datos.json?auth=${this.token}`;
    return this.http.get<{ [llave: string]: Producto }>(url_listar, {
      responseType: 'json',
    });
  }

  agregarProducto(producto: Producto): Observable<any> {
    const url_agregar = `${this.url}datos.json?auth=${this.token}`;
    return this.http.post(url_agregar, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const url_modificar = `${this.url}datos/${llave}.json?auth=${this.token}`;
    return this.http.put(url_modificar, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${this.token}`;
    return this.http.delete(url_eliminar);
  }
}
