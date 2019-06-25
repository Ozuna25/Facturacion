import { Component, OnInit } from '@angular/core';
import { ICliente } from './Cliente';
import { ClienteServiceService } from '../services/cliente-service.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  clientes: ICliente[];

  constructor(private ClienteServices: ClienteServiceService) { }
  filterPost: '';

  ngOnInit() {
    this.cargarData();
  }
  

  cargarData() {
    this.ClienteServices.getPersonas()
      .subscribe(cliente => this.clientes = cliente,
      error => console.error(error));
  }

  delete(cliente: ICliente) {
    this.ClienteServices.deleteCliente(cliente.id.toString())
      .subscribe(cliente => this.cargarData(),
        error => console.error(error));
  }
}
