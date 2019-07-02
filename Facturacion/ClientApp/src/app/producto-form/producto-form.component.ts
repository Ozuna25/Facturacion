import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from '../services/producto-service';
import { ICliente } from '../counter/Cliente';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { IProducto } from '../fetch-data/Producto';



@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],

})
export class ProductoFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  productoId: number;
  ngOnInit() {
    this.formGroup = this.fb.group({

      descripcion: '',
      precio: '',

    });
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.modoEdicion = true;

      this.productoId = params["id"];

      this.productoService.getProducto(this.productoId.toString())
        .subscribe(producto => this.cargarFormulario(producto),
        error => this.router.navigate(["/productos"]));

    });

  }
  cargarFormulario(producto: IProducto) {
  

    this.formGroup.patchValue({
      descripcion: producto.descripcion,
      precio: producto.precio
    });
    console.log(producto);
   

  }

  save() {
    let producto: IProducto = Object.assign({}, this.formGroup.value);
    console.table(producto);

    if (this.modoEdicion) {
      //editar el registro
      producto.id = this.productoId;
      this.productoService.updateProducto(producto)
        .subscribe(producto => this.onSaveSuccess(),
          error => console.error(error));
    } else {
      //agregar el registro
      this.productoService.createProducto(producto).subscribe(producto => this.onSaveSuccess(),
        error => console.error(error));
    }

  }

  onSaveSuccess() {
    this.router.navigate(["/productos"]);
  }
  

}
