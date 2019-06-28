import { Component, OnInit } from '@angular/core';
import { ICliente } from './Cliente';
import { ClienteServiceService } from '../services/cliente-service.service';

//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  clientes: ICliente[];

  page_size :number = 10
  page_number: number = 1
  filterPost: '';

  constructor(private ClienteServices: ClienteServiceService
    /*,private toastr: ToastrService*/) { }
 

  ngOnInit() {
    this.cargarData();
  }
  

  cargarData() {
    this.ClienteServices.getPersonas()
      .subscribe(cliente => this.clientes = cliente,
      error => console.error(error));
  }

  delete(cliente: ICliente) {
    if (confirm('Seguro quiere eliminar este cliente ?')) {
      this.ClienteServices.deleteCliente(cliente.id.toString())
        .subscribe(cliente => {
          this.cargarData();
          //this.toastr.warning('Eliminado Correctamente', 'Clientes');
    },
    err => {
      console.log(err);
    })
  }
  }

}
