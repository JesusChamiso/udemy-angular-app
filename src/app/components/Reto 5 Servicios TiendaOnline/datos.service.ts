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

  listarProductos(): Observable<{ [llave: string]: Producto }> {
    return this.http.get<{ [llave: string]: Producto }>(
      this.url + 'datos.json',
      { responseType: 'json' }
    );
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(`${this.url}datos.json`, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const url_modificar = `${this.url}datos/${llave}.json`;
    return this.http.put(url_modificar, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${llave}.json`;
    return this.http.delete(url_eliminar);
  }
}
