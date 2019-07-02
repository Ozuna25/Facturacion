import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProducto } from '../fetch-data/Producto';


@Injectable()
export class ProductoService {

  private apiURL = this.baseUrl + "api/Productos"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.apiURL);
  }

  getProducto(productoId: string): Observable<IProducto> {
    return this.http.get<IProducto>(this.apiURL + '/' + productoId);
  }

  createProducto(producto: IProducto): Observable<IProducto> {
    return this.http.post<IProducto>(this.apiURL, producto);
  }

  updateProducto(producto: IProducto): Observable<IProducto> {
    return this.http.put<IProducto>(this.apiURL + '/' + producto.id.toString(), producto);
  }

  deleteProducto(productoId: string): Observable<IProducto> {
    return this.http.delete<IProducto>(this.apiURL + '/' + productoId);
  }
}
