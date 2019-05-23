import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { EmpleadoModule } from './empleado/empleado.module';
import { TecnicoModule } from './tecnico/tecnico.module';

import { AdministradorDetailComponent } from './administrador/administrador-detail/administrador-detail.component';

import { MenuComponent } from './administrador/menu/menu.component';



@NgModule({
  imports: [
    CommonModule,    
    BrowserModule,
    HttpClientModule,    
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
    AppRoutingModule,
    EmpleadoModule, 
    TecnicoModule

  ],
  exports:[
     
  ],
  declarations: [AdministradorDetailComponent, MenuComponent]
})
export class UserModule { }
