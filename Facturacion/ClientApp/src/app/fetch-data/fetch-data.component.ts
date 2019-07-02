import { Component, OnInit } from '@angular/core';
import { IProducto } from './Producto';
import { ProductoService } from '../services/producto-service';

//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fetch-data-component',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  productos: IProducto[];

  page_size: number = 10
  page_number: number = 1
  filterPost: '';

  constructor(private ProductoServices: ProductoService
    /*,private toastr: ToastrService*/) { }


  ngOnInit() {
    this.cargarData();
  }


  cargarData() {
    this.ProductoServices.getProductos()
      .subscribe(producto => this.productos = producto,
        error => console.error(error));
  }

  delete(producto: IProducto) {
    if (confirm('Seguro quiere eliminar este producto ?')) {
      this.ProductoServices.deleteProducto(producto.id.toString())
        .subscribe(producto => {
          this.cargarData();
          //this.toastr.warning('Eliminado Correctamente', 'Clientes');
        },
          err => {
            console.log(err);
          })
    }
  }

}
