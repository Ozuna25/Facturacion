import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICliente } from '../counter/Cliente';


@Injectable()
export class ClienteServiceService {

  private apiURL = this.baseUrl + "api/Clientes"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPersonas(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.apiURL);
  }

  getCliente(clienteId: string): Observable<ICliente> {
    return this.http.get<ICliente>(this.apiURL + '/' + clienteId);
  }

  createCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.apiURL, cliente);
  }

  updateCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(this.apiURL + '/' + cliente.id.toString(), cliente);
  }

  deleteCliente(clienteId: string): Observable<ICliente> {
    return this.http.delete<ICliente>(this.apiURL + '/' + clienteId);
  }
}
