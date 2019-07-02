import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteServiceService } from './services/cliente-service.service';
import { ProductoService } from './services/producto-service';
import { FilterPipe } from './filter.pipe';
import { Pagination } from './pagination';
import { ProductoFormComponent } from './producto-form/producto-form.component';
//import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteFormComponent,
    ProductoFormComponent,
    FilterPipe,
    Pagination
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'facturas', component: HomeComponent, pathMatch: 'full' },
      { path: 'clientes', component: CounterComponent },
      { path: 'productos', component: FetchDataComponent },
      { path: 'agregarCliente', component: ClienteFormComponent },
      { path: 'editarCliente/:id', component: ClienteFormComponent },
      { path: 'agregarProducto', component: ProductoFormComponent },
      { path: 'editarProducto/:id', component: ProductoFormComponent },
    ])
  ],
  providers: [
    ClienteServiceService,
    ProductoService,
    ],

  bootstrap: [AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteFormComponent,
    ProductoFormComponent,
   ]
})
export class AppModule { }
