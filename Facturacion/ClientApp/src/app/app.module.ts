import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteServiceService } from './services/cliente-service.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteFormComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'facturas', component: HomeComponent, pathMatch: 'full' },
      { path: 'clientes', component: CounterComponent },
      { path: 'productos', component: FetchDataComponent },
      { path: 'agregarCliente', component: ClienteFormComponent },
      { path: 'editarCliente/:id', component: ClienteFormComponent },
    ])
  ],
  providers: [
    ClienteServiceService,],

  bootstrap: [AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteFormComponent,
   ]
})
export class AppModule { }
