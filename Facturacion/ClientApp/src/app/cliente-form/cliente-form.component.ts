import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteServiceService } from '../services/cliente-service.service';
import { ICliente } from '../counter/Cliente';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],

})
export class ClienteFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private clientesService: ClienteServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  clienteId: number;
  ngOnInit() {
    this.formGroup = this.fb.group({

      Nombres: '',
      Apellidos: '',
      Cedula: '',
      Direccion: '',
      Telefono: '',
      Email: '',
      FechaNacimiento: '',


    });
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.modoEdicion = true;

      this.clienteId = params["id"];

      this.clientesService.getCliente(this.clienteId.toString())
        .subscribe(persona => this.cargarFormulario(persona),
        error => this.router.navigate(["/clientes"]));

    });

  }
  cargarFormulario(cliente: ICliente) {
  
    
    //console.log("Fecha " + `${fechaNacAux.toString("yyyy-MM-dd")}-${fechaNacAux.getMonth}-${fechaNacAux.getDay}`);
    this.formGroup.patchValue({
      Nombres: cliente.nombres,
      Apellidos: cliente.apellidos,
      FechaNacimiento: cliente.fechaNacimiento,
      Cedula: cliente.cedula,
      Direccion: cliente.direccion,
      Telefono: cliente.telefono,
      Email: cliente.email
     
     
    });
    console.log(cliente);
   

  }

  save() {
    let cliente: ICliente = Object.assign({}, this.formGroup.value);
    console.table(cliente);

    if (this.modoEdicion) {
      //editar el registro
      cliente.id = this.clienteId;
      this.clientesService.updateCliente(cliente)
        .subscribe(cliente => this.onSaveSuccess(),
          error => console.error(error));
    } else {
      //agregar el registro
      this.clientesService.createCliente(cliente).subscribe(persona => this.onSaveSuccess(),
        error => console.error(error));
    }

  }

  onSaveSuccess() {
    this.router.navigate(["/clientes"]);
  }
  

}
